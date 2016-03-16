import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class Overlay extends Component {
    render() {
        const { zIndex, handleClick } = this.props;

        return (
            <div style={STYLES(zIndex)} onClick={handleClick}>
                {this.props.children}
            </div>
        );
    }
}

const STYLES = (zIndex) => {
    return {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex
    }
};

Overlay.propTypes = {
    zIndex : PropTypes.number,
    handleClick: PropTypes.func
};

Overlay.defaultProps = {
    zIndex : 0
};

export default Radium(Overlay);
