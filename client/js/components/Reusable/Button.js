import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class Button extends Component {
    render() {
        const { handleClick, text } = this.props;

        return (
            <div>
                <button onClick={handleClick}>
                    {text}
                </button>
            </div>
        );
    }
}

const STYLES = {};

Button.propTypes = {};
Button.defaultProps = {};

export default Radium(Button);
