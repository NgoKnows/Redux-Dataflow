import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { routerActions } from 'react-router-redux'
import dispatchAction from 'flux/DispatchAction'

import { VelocityTransitionGroup } from 'velocity-react'
import { enterFadeAnimation, leaveFadeAnimation } from '../animations'

import TodoApp from '../components/TodoApp/TodoAppPage'
import Redux from '../components/Redux/ReduxPage'
import Overlay from '../components/Reusable/Overlay'


class App extends Component {
    componentDidMount() {
        //setTimeout(() => this.props.routerActions.push('onboarding/intro'), 200);
    }

    render() {
        const { todos, todoInput, todosRedux, todoInputRedux, redux,
            actions, routerActions } = this.props;

        return (
            <div onKeyUp={this.handleKeyUp} style={STYLES.container}>
                <div style={STYLES.todoApp}>
                    <TodoApp
                        todos={todos}
                        todoInput={todoInput}
                        actions={actions}
                        dispatching={redux.dispatching}
                        stepping={redux.stepping}
                    />
                    <Redux
                        redux={redux}
                        todos={todosRedux}
                        todoInput={todoInputRedux}
                    />
                </div>
                <VelocityTransitionGroup
                    enter={enterFadeAnimation}
                    leave={leaveFadeAnimation}
                >
                    {this.props.children}
                </VelocityTransitionGroup>
                <i
                    key="settings"
                    style={STYLES.settings}
                    className="fa fa-cog"
                    onClick={() => routerActions.push('settings')}
                />
                <VelocityTransitionGroup
                    enter={enterFadeAnimation}
                    leave={leaveFadeAnimation}
                >
                    {redux.dispatching ?
                        <Overlay zIndex={2}>

                        </Overlay> : null
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }

    handleKeyUp(e) {
        const { location, routerActions } = this.props;

        if (e.key === 'Escape' && location.pathname.contains('onboarding')) {
            routerActions.push('');
        }
    }
}

const STYLES = {
    container: {
        fontFamily     : 'Uni Sans, Serif',
        height         : '100vh',
        fontSize       : '48px',
        width          : '100%'
    },

    todoApp: {
        display        : 'flex',
        justifyContent : 'space-between'
    },

    settings: {
        position: 'absolute',
        top: '12px',
        left: '12px',
        fontSize: '0.7em',
        color: 'grey',
        cursor: 'pointer'
    }
}

App.propTypes = {}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        todoInput: state.todoInput,
        todosRedux: state.todosRedux,
        todoInputRedux: state.todoInputRedux,
        redux: state.redux
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({dispatchAction}, dispatch),
        routerActions : bindActionCreators(routerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
