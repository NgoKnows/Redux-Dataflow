import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { VelocityTransitionGroup } from 'velocity-react'
import { enterFadeAnimation, leaveFadeAnimation } from '../../animations'

import TodoList from './TodoList'
import Input from '../Reusable/Input'
import Overlay from '../Reusable/Overlay'

class ToDoAppPage extends Component {
    render() {
        const { todos, todoInput, dispatching, actions, stepping } = this.props;

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
                    {dispatching ?
                        <div style={STYLES.arrows}>
                            <i
                                key="rightarrow"
                                style={[STYLES.arrow, STYLES.rightArrow, STYLES.disabled(stepping)]}
                                className="fa fa-arrow-right"
                                onClick={() => actions.dispatchAction()}
                            />
                        </div> : null
                    }
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
    },

    arrows: {
        display: 'flex',
        position: 'absolute',
        bottom: 30,
        color: '#23B6F1',
        zIndex: 999
    },

    arrow: {
        cursor: 'pointer'
        //marginLeft: '12px'
    },

    leftArrow: {
        marginRight: '36px'
    },

    rightArrow: {

    },

    disabled: (disabled) => {
        if (disabled) {
            return {
                color: '#d3d3d3',
                opacity: '0.2',
                ':hover': {
                    cursor: 'not-allowed'
                },
                ':active': {
                    pointerEvents: 'none'
                }
            };
        } else {
            return {};
        }
    }
};

ToDoAppPage.propTypes = {
    todos       : PropTypes.array.isRequired,
    todoInput   : PropTypes.string.isRequired,
    dispatching : PropTypes.bool.isRequired,
    actions     : PropTypes.object.isRequired
};

export default Radium(ToDoAppPage);
