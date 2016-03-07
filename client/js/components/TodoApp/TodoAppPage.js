import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import TodoList from './TodoList'
import Input from '../Reusable/Input'
import Overlay from '../Reusable/Overlay'

import { VelocityTransitionGroup } from 'velocity-react'
import { enterFadeAnimation, leaveFadeAnimation } from '../../animations'

class ToDoAppPage extends Component {
    render() {
        const { todos, todoInput, dispatching, actions } = this.props;

        return (
            <div style={STYLES.container}>
                <div style={STYLES.title}>ToDo App!</div>
                <Input
                    handleChange={(e) => actions.dispatchAction('setTodoInput', e.target.value)}
                    handleKeyUp={(e) => e.keyCode === 13 ? actions.dispatchAction('addTodoThunk') : null}
                    value={todoInput}
                    placeholder="What do you need to do?"
                />
                <TodoList
                    todos={todos}
                    actions={actions}
                />
                <VelocityTransitionGroup
                    enter={enterFadeAnimation}
                    leave={leaveFadeAnimation}
                >
                    {dispatching ? <Overlay zIndex={2}> </Overlay> : null}
                </VelocityTransitionGroup>
            </div>
        );
    }
}

const STYLES = {
    container: {
        width: '65%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        boxSizing: 'border-box'
    },

    title: {
        margin: '12px',
        textDecoration: 'underline'
    }
};

ToDoAppPage.propTypes = {};
ToDoAppPage.defaultProps = {};

export default Radium(ToDoAppPage);
