import React, { Component, PropTypes } from 'react';
import Radium from 'radium'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { routerActions } from 'react-router-redux'
import * as actions from 'flux/actions'

import Overlay from '../Reusable/Overlay'
import Modal from '../Reusable/Modal'
import Settings from './Settings'

class SettingsPage extends Component {
    render() {
        const { actions, redux } = this.props;

        return (
            <div>
                <div>
                    <Overlay zIndex={99} handleClick={() => this.handleOverlayClick()}>
                        <Modal
                            style={STYLES.modal}
                            handleClick={(e) => e.stopPropagation()}
                        >
                            <Settings
                                speed={redux.speed}
                                auto={redux.auto}
                                handleAutoClick={() => actions.setAuto(!redux.auto)}
                                handleSpeedChange={(speed) => actions.setSpeed(speed)}
                            />
                        </Modal>
                    </Overlay>
                </div>
            </div>
        );
    }

    handleOverlayClick() {
        const { routerActions } = this.props;

        routerActions.push('');
    }
}

const STYLES = {
    modal : {
        height: 'auto',
        width: 'auto'
    }
};

SettingsPage.propTypes = {};
SettingsPage.defaultProps = {};

function mapStateToProps(state, ownProps) {
    return {
        redux: state.redux
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(actions, dispatch),
        routerActions : bindActionCreators(routerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
