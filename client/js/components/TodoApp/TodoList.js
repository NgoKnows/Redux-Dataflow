import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { VelocityTransitionGroup } from 'velocity-react'
import { enterFlipAnimation, leaveFlipAnimation } from '../../animations'

import Todo from './Todo'

class ToDoList extends Component {
    render() {
        const { todos, actions } = this.props;

        return (
            <div style={STYLES.container}>
                <VelocityTransitionGroup
                    component="div"
                    enter={enterFlipAnimation}
                    leave={leaveFlipAnimation}
                    style={STYLES.todoContainer}
                >
                    {todos.map((todo, index) => {
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                toggleTodo={() => actions.dispatchAction('toggleTodo', index)}
                                removeTodo={() => actions.dispatchAction('removeTodo', index)}
                            />
                        )
                    })}
                </VelocityTransitionGroup>
            </div>
        );
    }
}

const STYLES = {
    container: {
        width     : '700px',
        marginTop : '36px',
        fontSize  : '0.8em'
    }
};

ToDoList.propTypes = {
    todos   : PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired
};

export default Radium(ToDoList);
