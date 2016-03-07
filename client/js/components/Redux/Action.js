import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { VelocityTransitionGroup } from 'velocity-react'
import { enterFadeAnimation, leaveFadeAnimation } from '../../animations'

import WhiteSpace from '../Reusable/WhiteSpace'
import Underlined from '../Reusable/Underlined'

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
            <div>
                <Underlined active={active}>
                    <div style={STYLES.header}>Action</div>
                </Underlined>
                <VelocityTransitionGroup
                    component="div"
                    enter={enterFadeAnimation}
                    leave={leaveFadeAnimation}
                >
                    {Object.keys(currentAction).length !== 0 ?
                        <div style={STYLES.code} key="ha">
                            <div>[</div>
                            <div>
                                <WhiteSpace tabs={1}/>
                                <span style={STYLES.prop}>type:</span> "{currentAction.type}"
                            </div>
                            { payload ?
                                <div>
                                    <WhiteSpace tabs={1}/>
                                    <span style={STYLES.prop}>{payload}:</span> {renderValue(currentAction[payload])}
                                </div> : null
                            }
                            <div>]</div>
                        </div> : null
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}

const STYLES = {
    header: {
        fontSize: '36px',
        //textDecoration: 'underline',
        marginBottom: '8px'
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
