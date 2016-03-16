import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import FadeAnimation from '../Animation/FadeAnimation'
import Underlined from '../Reusable/Underlined'

class ReduxCode extends Component {
    render() {
        const { active, name } = this.props;

        return (
            <div>
                <div style={STYLES.headerContainer}>
                    <Underlined active={active}>
                        <div style={[STYLES.header, STYLES.active(active)]}>{name}</div>
                    </Underlined>
                    <FadeAnimation>
                        {active ? <i className="fa fa-long-arrow-left" style={STYLES.arrow}/> : null}
                    </FadeAnimation>
                </div>
                <div style={STYLES.code}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const STYLES = {
    headerContainer: {
        display: 'flex'
    },

    header: {
        fontSize: '36px',
        fontStyle: 'italic',
        color: 'grey',
        marginBottom: '8px'
    },

    active: (active) => active ? { fontWeight : 'normal' } : {},

    code: {
        fontFamily: 'Simplifica',
        overflowWrap: 'break-word',
        letterSpacing: '2px',
        fontSize: '28px',
        //height: '50px'
    },

    arrow: {
        marginLeft: '24px',
        fontSize: '0.8em'
    }
};

ReduxCode.propTypes = {};
ReduxCode.defaultProps = {};

export default Radium(ReduxCode);
