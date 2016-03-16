import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class WhiteSpace extends Component {
    render() {
        const { tabs } = this.props;

        return (
            <span style={STYLES(tabs)} />
        );
    }
}

const STYLES = (tabs) => {
    return {
        marginLeft : (28 * tabs) + 'px'
    }
};

WhiteSpace.propTypes = {
    tabs : PropTypes.number
}

WhiteSpace.defaultPropTypes = {
    tabs : 1
}

export default Radium(WhiteSpace);
