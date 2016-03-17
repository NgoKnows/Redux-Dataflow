import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import ReduxCode from './ReduxCode'
import FadeAnimation from '../Animation/FadeAnimation'
import WhiteSpace from '../Reusable/WhiteSpace'

class Action extends Component {
    render() {
        const { currentAction, active } = this.props;

        let payload;
        if (currentAction) {
            const keys = Object.keys(currentAction);
            if (keys.length > 1) {
                for (let i = 0; i < keys.length; i++) {
                    if (keys[i] !== 'type') {
                        payload = keys[i];
                    }
                }
            }
        }

        return (
            <ReduxCode
                active={active}
                name="Action"
                style={STYLES.container}
            >
                <FadeAnimation>
                    {Object.keys(currentAction).length !== 0 ?
                        <div>
                            <div>{'{'}</div>
                            <div>
                                <WhiteSpace tabs={1}/>
                                <span style={STYLES.prop}>type:</span> "{currentAction.type}",
                            </div>
                            { payload ?
                                <div>
                                    <WhiteSpace tabs={1}/>
                                    <span style={STYLES.prop}>{payload}:</span> {renderValue(currentAction[payload])}
                                </div> : null
                            }
                            <div>{'}'}</div>
                        </div>
                            :
                        <span style={STYLES.noAction} key="noaction">No Action is being dispatched!</span>
                    }
                </FadeAnimation>
            </ReduxCode>
        );
    }
}

const STYLES = {
    prop: {
        fontWeight: 'bold',
        fontSize: '1.2em'
    },

    noAction: {
        fontSize: '36px',
        fontFamily: 'Simplifica',
        //height: '50px'
    },

    container: {
        height: '200px'
    }
};

function renderValue(value) {
    if (isNaN(value)) {
        return `"${value}"`;
    } else {
        return value;
    }
}
Action.propTypes = {};
Action.defaultProps = {};

export default Radium(Action);
