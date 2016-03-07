import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class Input extends Component {
    render() {
        const { value, placeholder, handleChange, handleKeyUp } = this.props;

        return (
            <div>
                <input
                    style={STYLES}
                    onChange={handleChange}
                    value={value}
                    placeholder={placeholder}
                    onKeyUp={handleKeyUp}
                />
            </div>
        );
    }
}

const STYLES = {
    width: '700px',
    fontSize: '42px',
    fontFamily: 'inherit',
    padding: '12px'
};

Input.propTypes = {};
Input.defaultProps = {};

export default Radium(Input);
