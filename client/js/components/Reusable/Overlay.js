import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class Overlay extends Component {
    render() {
        return (
            <div style={STYLES}>
                {this.props.children}
            </div>
        );
    }
}

const STYLES = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)'
};

Overlay.propTypes = {};
Overlay.defaultProps = {};

export default Radium(Overlay);
