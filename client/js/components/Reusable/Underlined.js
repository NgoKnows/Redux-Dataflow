import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class Underlined extends Component {
    render() {
        const { active } = this.props;

        return (
            <span className="line_wrap">
                <span style={STYLES(active)} className="underline" />
                {this.props.children}
            </span>
        );
    }
}

const STYLES = (active) => {
    return active ? { width: '100%' } : {};
}

Underlined.propTypes = {
    children: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
    ]).isRequired
};

export default Radium(Underlined)