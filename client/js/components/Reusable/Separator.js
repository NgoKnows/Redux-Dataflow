import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class Separator extends Component {
    render() {
        return (
            <div style={STYLES} />
        );
    }
}

const STYLES = {
    borderLeft: '1px solid black',
    marginRight: '24px',
    marginLeft: '24px'
}

Separator.propTypes = {};
Separator.defaultProps = {};

export default Radium(Separator);
