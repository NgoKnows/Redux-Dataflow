import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class Modal extends Component {
    render() {
        const { handleClick, style } = this.props;
        return (
            <div
                style={[STYLES, this.props.style]}
                onClick={handleClick}
            >
                {this.props.children}
            </div>
        );
    }
}

const STYLES = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '550px',
    width: '940px',
    backgroundColor: 'white',
    borderRadius: '7px',
    boxShadow: '2px 2px 7px black',
    padding: '24px 12px',
    boxSizing: 'border-box'
};

Modal.propTypes = {};
Modal.defaultProps = {};

export default Radium(Modal);
