import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class CrossedOut extends Component {
    render() {
        const { completed } = this.props;

        return (
            <span className="line_wrap">
                <span style={STYLES.completed(completed)} className="line"></span>
                {this.props.children}
            </span>
        );
    }
}

const STYLES = {
    completed(completed) {
        if (completed) {
            return {
                width: '100%'
            };
        } else {
            return {};
        }
    }
}

CrossedOut.propTypes = {
    children: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
    ])
};

export default Radium(CrossedOut)