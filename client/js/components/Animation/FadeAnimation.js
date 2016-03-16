import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { VelocityTransitionGroup } from 'velocity-react'
import { enterFadeAnimation, leaveFadeAnimation } from '../../animations'

class FadeAnimation extends Component {
    render() {
        return (
            <VelocityTransitionGroup
                component="div"
                enter={enterFadeAnimation}
                leave={leaveFadeAnimation}
            >
                {this.props.children}
            </VelocityTransitionGroup>
        );
    }
}

const STYLES = {};

FadeAnimation.propTypes = {};
FadeAnimation.defaultProps = {};

export default Radium(FadeAnimation);
