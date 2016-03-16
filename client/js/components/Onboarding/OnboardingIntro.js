import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import Definition from '../Reusable/Definition'

const fluxDefinition = ['Flux is an application architecture created Facebook.'];

class OnboardingIntro extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <div>What is <span style={STYLES.bold}>Redux</span>?</div>
                <ul style={STYLES.list}>
                    <li style={STYLES.listItem}>Redux is a predictable state container for JavaScript apps</li>
                    <li style={STYLES.listItem}>
                        Inspired by Facebook's <Definition word="Flux" definition={fluxDefinition}/> architecture
                    </li>
                    <li style={STYLES.listItem}>Typically used with React to implement a unidirectional dataflow</li>
                </ul>
            </div>
        );
    }
}

const STYLES = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },

    list: {
        fontFamily: 'Simplifica',
        fontSize: '36px',
        letterSpacing: '0.5',
    },

    listItem: {
        marginBottom: '24px'
    },

    bold: {
        fontStyle: 'italic',
        color: '#23B6F1'
    }
};

OnboardingIntro.propTypes = {};
OnboardingIntro.defaultProps = {};

export default Radium(OnboardingIntro);
