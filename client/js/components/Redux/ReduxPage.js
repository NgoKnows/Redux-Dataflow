import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class ReduxPage extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <div>
                    Action
                </div>

                <div>
                    Reducer
                </div>

                <div>
                    Current State
                </div>
            </div>
        );
    }
}

const STYLES = {
    container: {
        padding: '16px',
        width: '30%',
        height: '100vh',
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        boxSizing: 'border-box'
    }
};

ReduxPage.propTypes = {};
ReduxPage.defaultProps = {};

export default Radium(ReduxPage);
