import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import WhiteSpace from '../Reusable/WhiteSpace'
import Underlined from '../Reusable/Underlined'

const cases = ['case ADD_TODO:', 'case REMOVE_TODO:',
    'case TOGGLE_TODO:', 'case SET_TODO_INPUT:'];

class Reducer extends Component {
    render() {
        const { reducerLine, currentAction, active } = this.props;

        return (
            <div>
                <Underlined active={active}>
                    <div style={[STYLES.header, STYLES.active(active)]}>Reducer</div>
                </Underlined>
                <div style={STYLES.code}>
                    <div>
                        <WhiteSpace tabs={0} />
                        <span>switch(action.type){'{'}</span>
                    </div>
                    {cases.map((value, index) => {
                       return (
                            <div
                                style={[
                                STYLES.selected(index === reducerLine, value.includes(currentAction.type))
                                ]}
                                key={index}
                            >
                                <WhiteSpace tabs={1} />
                                <span>{value}</span>
                            </div>
                        );
                    })}
                    <div>
                        <WhiteSpace tabs={0} />
                        <span>{'}'}</span>
                    </div>
                </div>
            </div>
        );
    }
}

//STYLES.correct(value.includes(currentAction))

const STYLES = {
    header: {
        fontSize: '36px',
        fontStyle: 'italic',
        color: 'grey',
        //textDecoration: 'underline',
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

    selected: (selected, correct) => {
        if (selected && correct) {
            return {
                backgroundColor: 'rgba(40,237,182,.5)',
            };
        } else if (selected) {
            return {
                backgroundColor: 'rgba(255,255,0,.5)',
            };
        } else {
            return {};
        }
    },

    //correct: (correct) => {
    //    if (correct) {
    //        return {
    //            background
    //        }
    //    } else {
    //
    //    }
    //}
};
Reducer.propTypes = {};
Reducer.defaultProps = {};

export default Radium(Reducer);
