import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class CrossedOut extends Component {
    render() {
        const { completed } = this.props;

        return (
            <span className="line_wrap">
                <span style={STYLES(completed)} className="line" />
                {this.props.children}
            </span>
        );
    }
}

const STYLES = (completed) => {
    return completed ? { width: '100%' } : {};
}

CrossedOut.propTypes = {
    children: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
    ])
};

export default Radium(CrossedOut)