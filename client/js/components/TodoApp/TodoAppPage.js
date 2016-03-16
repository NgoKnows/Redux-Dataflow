import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { VelocityTransitionGroup } from 'velocity-react'
import { enterFadeAnimation, leaveFadeAnimation } from '../../animations'

import TodoList from './TodoList'
import Input from '../Reusable/Input'
import Overlay from '../Reusable/Overlay'

class ToDoAppPage extends Component {
    render() {
        const { todos, todoInput, dispatching, actions } = this.props;

        return (
            <div style={STYLES.container}>
                <div style={STYLES.title}>ToDo App!</div>
                <Input
                    handleChange={(e) => actions.dispatchAction('setTodoInput', e.target.value)}
                    handleKeyUp={(e) => e.keyCode === 13 ? actions.dispatchAction('addTodoThunk') : null}
                    placeholder="What do you need to do?"
                    value={todoInput}
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
    container : {
        alignItems    : 'center',
        boxSizing     : 'border-box',
        display       : 'flex',
        flexDirection : 'column',
        padding       : '16px',
        width         : '65%'
    },

    title : {
        margin         : '12px',
        textDecoration : 'underline'
    }
};

ToDoAppPage.propTypes = {
    todos       : PropTypes.array.isRequired,
    todoInput   : PropTypes.string.isRequired,
    dispatching : PropTypes.bool.isRequired,
    actions     : PropTypes.object.isRequired
};

export default Radium(ToDoAppPage);
