import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class WhiteSpace extends Component {
    render() {
        const { tabs } = this.props;

        console.log(tabs)

        return (
            <span style={STYLES(tabs)}></span>
        );
    }
}

const STYLES = (tabs) => {
    return {
        marginLeft: (28 * tabs) + 'px'
    }
};

export default Radium(WhiteSpace);
