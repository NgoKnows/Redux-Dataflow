import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { VelocityTransitionGroup } from 'velocity-react'
import { enterFlipAnimation, leaveFlipAnimation } from '../../animations'

import CrossedOut from '../Reusable/CrossedOut'

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
                    {todos.map((element, index) => {
                        return (
                            <div style={STYLES.todo} key={element.id}>
                                <div style={STYLES.name}>
                                    {this.renderCheckBox(element.completed, index)}
                                    <CrossedOut completed={element.completed}>
                                        <div style={STYLES.text}>{element.text}</div>
                                    </CrossedOut>
                                </div>
                                <i
                                    className="fa fa-times"
                                    style={STYLES.x}
                                    onClick={() => actions.dispatchAction('removeTodo', index)}
                                />
                            </div>
                        )
                    })}
                </VelocityTransitionGroup>
            </div>
        );
    }

    renderCheckBox(completed, index) {
        const { actions } = this.props;

        if (completed) {
            return (
                <i
                    className="fa fa-check-circle-o"
                    style={[STYLES.checkbox, STYLES.selected]}
                    onClick={() => actions.dispatchAction('toggleTodo' ,index)}
                />
            )
        } else {
            return (
                <i
                    className="fa fa-circle-o"
                    style={STYLES.checkbox}
                    onClick={() => actions.dispatchAction('toggleTodo' ,index)}
                />
            )
        }
    }
}

const STYLES = {
    container: {
        width: '700px',
        marginTop: '36px',
        fontSize: '0.8em'
    },

    todo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'

    },

    name: {
        display: 'flex',
        alignItems: 'center'
    },

    text: {
        lineHeight: '0'
    },

    x: {
        color: 'red',
        fontSize: '32px',
        marginLeft: '12px',
        cursor: 'pointer'
    },

    checkbox: {
        fontSize: '32px',
        color: '#d3d3d3',
        marginRight: '20px',
        cursor: 'pointer',
        //opacity: '0.1',
        //transition: 'opacity 5s ease-out',

    },
    selected: {
        color: '#28EDB6',
        opacity: 1
    },

    todoContainer: {
        marginBottom: '24px'
    }
};

ToDoList.propTypes = {};
ToDoList.defaultProps = {};

export default Radium(ToDoList);
