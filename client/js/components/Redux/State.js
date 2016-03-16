import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import ReduxCode from './ReduxCode'
import WhiteSpace from '../Reusable/WhiteSpace'

class State extends Component {
    render() {
        const { todos, todoInput, changed, active } = this.props;

        return (
            <ReduxCode active={active} name="State">
                <div>{'{'}</div>
                <div>
                    <WhiteSpace tabs={1} />
                    <span style={STYLES.prop}>todos:</span> [
                </div>
                {todos.map((todo, index) => {
                  return (
                      <div style={[STYLES.unchanged, STYLES.changed(changed.todos === index)]} key={todo.id}>
                          <WhiteSpace tabs={2} />
                          {`{text: ${todo.text}, done: ${todo.completed}}`}
                      </div>
                  )
                })}
                <div>
                    <WhiteSpace tabs={1} />
                    ] ,
                </div>
                <div style={[STYLES.unchanged, STYLES.changed(changed.todoInput)]}>
                    <WhiteSpace tabs={1} />
                    <span style={[STYLES.prop]}>todoInput:</span> "{todoInput}"
                </div>
                <div>{'}'}</div>
            </ReduxCode>
        );
    }
}

const STYLES = {
    header: {
        fontSize: '36px',
        fontStyle: 'italic',
        color: 'grey',
        marginBottom: '8px'
    },

    active: (active) => {
        if (active) {
            return {
                fontWeight: 'bold'
            };
        } else {
            return {};
        }
    },
    
    code: {
        fontFamily: 'Simplifica',
        overflowWrap: 'break-word',
        letterSpacing: '2px',
        fontSize: '28px'
    },

    prop: {
        fontWeight: 'bold',
        fontSize: '1.2em'
    },

    unchanged: {
        transition: 'background-color 1s ease-out',
    },

    changed: (changed) => {
        if (changed) {
            return {
                backgroundColor: 'rgba(40,237,182,.5)',
            };
        } else {
            return {};
        }
    }
};

State.propTypes = {};
State.defaultProps = {};

export default Radium(State);
