import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class Title extends Component {
    render() {
        const { description, name, style } = this.props;
        return (
            <div style={[TITLE_STYLES.title, style]}>
                {description} - <span style={TITLE_STYLES.emphasis}>{name}</span>
            </div>
        );
    }
}

const TITLE_STYLES = {
    title: {
        fontSize: '36px'
    },

    emphasis: {
        fontStyle: 'italic',
        color: '#23B6F1'
    }
};

class List extends Component {
    render() {
        return (
            <ul style={LIST_STYLES}>
                {this.props.children}
            </ul>
        );
    }
}

const LIST_STYLES = {
    fontFamily: 'Simplifica',
    fontSize: '32px',
    letterSpacing: '0.5',
    width: '50%',
    margin: 0
}

class Code extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

const CODE_STYLES = {

}

export const OnboardingTitle = Radium(Title);
export const OnboardingList = Radium(List);
export const OnboardingCode = Radium(Code);
