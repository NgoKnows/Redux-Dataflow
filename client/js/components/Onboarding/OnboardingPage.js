import React, { Component, PropTypes } from 'react';
import Radium from 'radium'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { routerActions } from 'react-router-redux'
import * as actions from 'flux/actions'

import { VelocityTransitionGroup } from 'velocity-react'
import { enterFadeAnimation, leaveFadeAnimation } from '../../animations'

import Overlay from 'reusable/Overlay'
import Dots from './Dots'

class OnboardingPage extends Component {
    render() {
        const { location, routerActions } = this.props;
        return (
            <div>
                <Overlay>
                    <div style={STYLES.infoContainer}>
                        <i
                            className="fa fa-times"
                            style={STYLES.x}
                            onClick={() => routerActions.push('/')}
                        />
                        <VelocityTransitionGroup
                            component="div"
                            style={STYLES.contentContainer}>
                            {React.cloneElement(this.props.children, {key: 0})}
                        </VelocityTransitionGroup>
                        <Dots
                            path={this.props.location.pathname}
                            routerActions={routerActions}
                        />
                    </div>
                </Overlay>
            </div>
        );
    }
}

const STYLES = {
    container: {

    },

    infoContainer: {
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
    },

    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //width: '90%'
    },

    x: {
        position: 'absolute',
        left: '16px',
        top: '10px',
        fontSize: '25px',
        color: 'red',
        cursor: 'pointer'
    }
};

OnboardingPage.propTypes = {};
OnboardingPage.defaultProps = {};

function mapStateToProps(state, ownProps) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(actions, dispatch),
        routerActions : bindActionCreators(routerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingPage);