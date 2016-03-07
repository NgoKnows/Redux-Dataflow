import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import WhiteSpace from '../Reusable/WhiteSpace'
import ReactTooltip from 'react-tooltip'

class OnboardingAction extends Component {

    render() {
        return (
            <div style={STYLES.container}>
                <div style={STYLES.title.main}>
                    State is Read-Only - <span style={STYLES.emphasis}>Actions</span>
                </div>
                <div style={STYLES.content.container}>
                    <ul style={STYLES.content.list}>
                        <li style={STYLES.content.listItem}>The only way to mutate state is to dispatch an action</li>
                        <li style={STYLES.content.listItem}>There is essence, only one way to change state</li>
                        <li style={STYLES.content.listItem}>An action is simply a JavaScript object which describes what is happening</li>
                    </ul>
                    <div style={STYLES.separator}/>
                    <div style={STYLES.content.display.container}>
                        <div style={STYLES.content.display.title}>
                            What does an <span style={STYLES.emphasis}>Action</span> look like?
                        </div>
                        <div style={STYLES.content.display.main}>
                            <div style={STYLES.example} data-tip data-for="action creator" key="action creator">
                                {'function addTodo(todo) {'}
                            </div>
                            <ReactTooltip id="action creator" place="top" type="info" effect="solid" class="example">
                                This is an 'action creator', it is a function that returns a action
                            </ReactTooltip>

                            <div><WhiteSpace tabs={1}/>{'return {'}</div>

                            <div style={STYLES.example} data-tip data-for="action type" key="action type">
                                <WhiteSpace tabs={2}/>
                                {'type: ADD_TODO ,'}
                            </div>
                            <ReactTooltip id="action type" place="top" type="info" effect="solid" class="example">
                                This is an 'action type', this is a constant that describes the action
                            </ReactTooltip>

                            <div><WhiteSpace tabs={2}/>{'todo: todo'}</div>

                            <div><WhiteSpace tabs={1}/>{'}'}</div>

                            <div>{'}'}</div>
                        </div>
                    </div>
                </div>
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

    title: {
        main: {
            fontSize: '36px'
        }
    },

    emphasis: {
        fontStyle: 'italic',
        //textDecoration: 'underline',
        color: '#23B6F1'
    },

    content: {
        container: {
            marginTop: '36px',
            display: 'flex',
            fontSize: '42px',
            justifyContent: 'space-around'
        },

        list: {
            fontFamily: 'Simplifica',
            fontSize: '32px',
            letterSpacing: '0.5',
            width: '50%',
            margin: 0
        },

        listItem: {
            marginBottom: '24px'
        },

        display: {
            container: {
                width: '40%'
            },

            title: {
                fontSize: '28px',
                marginBottom: '12px'
            },

            main: {
                fontFamily: 'Simplifica',
                fontSize: '36px'
            }
        }

    },

    separator: {
        borderLeft: '1px solid black',
        marginRight: '24px',
        marginLeft: '24px'
    },

    example: {
        transition: 'background-color 0.4s ease-out',
        cursor: 'pointer',
        //textDecoration: 'underline',
        ':hover' : {
            backgroundColor: 'rgba(255,255,0,1)',
        }
    }
};

OnboardingAction.propTypes = {};
OnboardingAction.defaultProps = {};

export default Radium(OnboardingAction);
