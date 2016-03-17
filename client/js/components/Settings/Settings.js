import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

class Settings extends Component {
    render() {
        const { speed, auto, handleSpeedChange } = this.props;

        return (
            <div>
                <h4 style={STYLES.heading}>Settings</h4>
                <div style={STYLES.setting}>
                    <div style={STYLES.name}>Dispatch Automatically?</div>
                    {this.renderCheckbox(auto)}
                </div>
                <div style={STYLES.setting}>
                    <div style={STYLES.name}>Speed</div>
                    <Slider
                        className="settingsSlider"
                        min={0.5}
                        max={2}
                        step={null}
                        marks={{
                            0.5 : '0.5x',
                            1   : '1x',
                            1.5 : '1.5x',
                            2   : '2x'
                        }}
                        onChange={(speed) => handleSpeedChange(speed)}
                        value={speed}
                    />
                </div>
            </div>
        );
    }

    renderCheckbox(checked) {
        const { handleAutoClick } = this.props;

        if (checked) {
            return (
                <i
                    onClick={handleAutoClick}
                    style={[STYLES.checkbox, STYLES.checked]}
                    className="fa fa-check-square-o"
                />
            )
        } else {
            return (
                <i
                    onClick={handleAutoClick}
                    style={[STYLES.checkbox, STYLES.unchecked]}
                    className="fa fa-square-o"
                />
            )
        }
    }
}

const STYLES = {
    setting: {
        display: 'flex',
        alignItems: 'center',
        padding: '24px'
    },

    heading: {
        margin: 0
    },

    name: {
        marginRight: '36px',
        fontSize: '36px'
    },

    checkbox: {
        cursor: 'pointer',
        fontSize: '0.8em'
    },

    checked: {
        color: '#28EDB6'
    },

    unchecked: {

    }
};

Settings.propTypes = {};
Settings.defaultProps = {};

export default Radium(Settings);
