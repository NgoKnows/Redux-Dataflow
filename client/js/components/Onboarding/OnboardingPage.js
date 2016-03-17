import React, { Component, PropTypes } from 'react';
import Radium from 'radium'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { routerActions } from 'react-router-redux'
import * as actions from 'flux/actions'

import { VelocityTransitionGroup } from 'velocity-react'
import { enterFadeAnimation, leaveFadeAnimation } from '../../animations'

import Overlay from '../Reusable/Overlay'
import Modal from '../Reusable/Modal'
import Dots from './Dots'

class OnboardingPage extends Component {
    render() {
        const { location, routerActions } = this.props;

        return (
            <div>
                <Overlay zIndex={99} handleClick={() => this.handleOverlayClick()}>
                    <Modal handleClick={(e) => e.stopPropagation()}>
                        <i
                            className="fa fa-times"
                            style={STYLES.x}
                            onClick={() => routerActions.push('/')}
                        />
                        <VelocityTransitionGroup
                            component="div"
                            style={STYLES.contentContainer}>
                            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                        </VelocityTransitionGroup>
                        <Dots
                            path={this.props.location.pathname}
                            routerActions={routerActions}
                        />
                    </Modal>
                </Overlay>
            </div>
        );
    }

    handleOverlayClick() {
        const { routerActions } = this.props;

        routerActions.push('');
    }
}

const STYLES = {
    container: {},

    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(actions, dispatch),
        routerActions : bindActionCreators(routerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingPage);