import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import TodoList from './TodoList'
import Button from '../Reusable/Button'
import Input from '../Reusable/Input'

class ToDoAppPage extends Component {
    render() {
        const { todos, todoInput, actions } = this.props;

        return (
            <div style={STYLES.container}>
                <div style={STYLES.title}>ToDo App!</div>
                <Input
                    handleChange={(e) => actions.setTodoInput(e.target.value)}
                    handleKeyUp={(e) => e.keyCode === 13 ? actions.addTodoThunk() : null}
                    value={todoInput}
                    placeholder="What do you need to do?"
                />
                <TodoList
                    todos={todos}
                    actions={actions}
                />
            </div>
        );
    }
}

//<Button
//    //    handleClick={() => actions.addTodoThunk()}
//    //    text={'Add to your Todos!'}
//    ///>

const STYLES = {
    container: {
        width: '70%',
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
