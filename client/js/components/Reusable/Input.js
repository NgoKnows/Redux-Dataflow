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
    fontSize: '52px',
    fontFamily: 'inherit',
    padding: '12px',
    fontFamily: 'Simplifica',
    letterSpacing: '2px'
};

Input.propTypes = {
    value        : PropTypes.string.isRequired,
    placeholder  : PropTypes.string.isRequired,
    handleChange : PropTypes.func.isRequired,
    handleKeyUp  : PropTypes.func.isRequired
};

export default Radium(Input);
