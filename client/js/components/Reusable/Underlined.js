import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class Underlined extends Component {
    render() {
        const { active } = this.props;

        return (
            <span className="line_wrap">
                <span style={STYLES.active(active)} className="underline" />
                {this.props.children}
            </span>
        );
    }
}

const STYLES = {
    active(active) {
        if (active) {
            return {
                width: '100%'
            };
        } else {
            return {};
        }
    }
}

Underlined.propTypes = {
    children: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
    ])
};

export default Radium(Underlined)