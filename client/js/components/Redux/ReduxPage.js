import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import Action from './Action'
import Reducer from './Reducer'
import State from './State'

class ReduxPage extends Component {
    render() {
        const { todos, todoInput, redux } = this.props;

        return (
            <div style={STYLES.container}>
                <Action
                    active={redux.section === 'action'}
                    currentAction={redux.currentAction}
                />
                <Reducer
                    active={redux.section === 'reducer'}
                    reducerLine={redux.reducerLine}
                    currentAction={redux.currentAction}
                />
                <State
                    active={redux.section === 'state'}
                    todos={todos}
                    todoInput={todoInput}
                    changed={redux.changed}
                />
            </div>
        );
    }
}

const STYLES = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '16px',
        width: '35%',
        height: '100vh',
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        boxSizing: 'border-box'
    }
};

ReduxPage.propTypes = {};
ReduxPage.defaultProps = {};

export default Radium(ReduxPage);
