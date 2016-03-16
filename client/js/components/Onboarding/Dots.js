import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import ReactTooltip from 'react-tooltip'

class Dots extends Component {
    render() {
        const { path, routerActions } = this.props;

        return (
            <div style={STYLES.container}>
                <div
                    key="intro"
                    data-tip data-for="intro"
                    onClick={() => routerActions.push('/onboarding/intro')}
                    style={[STYLES.dot, STYLES.active(path.endsWith('intro'))]}
                />
                <ReactTooltip id="intro" place="top" type="dark" effect="solid">
                    Intro
                </ReactTooltip>

                <div
                    key="state"
                    data-tip data-for="state"
                    onClick={() => routerActions.push('/onboarding/state')}
                    style={[STYLES.dot, STYLES.active(path.endsWith('state'))]}
                />
                <ReactTooltip id="state" place="top" type="dark" effect="solid">
                    State
                </ReactTooltip>

                <div
                    key="action"
                    data-tip data-for="action"
                    onClick={() => routerActions.push('/onboarding/action')}
                    style={[STYLES.dot, STYLES.active(path.endsWith('action'))]}
                />
                <ReactTooltip id="action" place="top" type="dark" effect="solid">
                    Actions
                </ReactTooltip>

                <div
                    key="reducer"
                    data-tip data-for="reducer"
                    onClick={() => routerActions.push('/onboarding/reducer')}
                    style={[STYLES.dot, STYLES.active(path.endsWith('reducer'))]}
                />
                <ReactTooltip id="reducer" place="top" type="dark" effect="solid">
                    Reducers
                </ReactTooltip>
            </div>
        );
    }
}

const STYLES = {
    container : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20px'
    },

    dot: {
        height: '14px',
        width: '14px',
        opacity: '.25',
        borderRadius: '50%',
        backgroundColor: '#23B6F1',
        marginLeft: '16px',
        cursor: 'pointer',
        transition: 'height 0.2s ease-out, width 0.2s ease-out, opacity 0.45s ease-out',
        ':hover': {
            opacity: 1
        }
    },

    active: (active) => {
        if (active) {
            return {
                opacity: '1',
                height: '20px',
                width: '20px'
            }
        } else {
            return {};
        }
    }
};

Dots.propTypes = {};
Dots.defaultProps = {};

export default Radium(Dots);
