import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import WhiteSpace from '../Reusable/WhiteSpace'
import ReactTooltip from 'react-tooltip'

class OnboardingState extends Component {

    render() {
        return (
            <div style={STYLES.container}>
                <div style={STYLES.title.main}>
                    Single Source of Truth - <span style={STYLES.emphasis}>State</span>
                </div>
                <div style={STYLES.content.container}>
                    <ul style={STYLES.content.list}>
                        <li style={STYLES.content.listItem}>All of your app's state lives in one object tree.</li>
                        <li style={STYLES.content.listItem}>Allows for easier debugging because all of state is in one place</li>
                    </ul>
                    <div style={STYLES.separator}/>
                    <div style={STYLES.content.display.container}>
                        <div style={STYLES.content.display.title}>
                            What does a <span style={STYLES.emphasis}>State</span> tree look like?
                        </div>
                        <div style={STYLES.content.display.main}>
                            <div>{'{'}</div>


                            <div style={STYLES.example} data-tip data-for="todos" key="todos">
                                <div><WhiteSpace tabs={1}/>{'todos: [{'}</div>
                                <div><WhiteSpace tabs={2}/>{'text: "get groceries" ,'}</div>
                                <div><WhiteSpace tabs={2}/>{'completed: false'}</div>
                                <div><WhiteSpace tabs={1}/>{'}] ,'}</div>
                            </div>
                            <ReactTooltip id="todos" place="top" type="info" effect="solid" class="example">
                                An array of "todos" which are just plain objects <br/>
                                representing the text and if it is completeted
                            </ReactTooltip>



                            <div style={STYLES.example} data-tip data-for="todoInput" key="todoInput">
                                <WhiteSpace tabs={1}/>
                                {'todoInput: "walk the dog"'}
                            </div>
                            <ReactTooltip id="todoInput" place="top" type="info" effect="solid" class="example">
                                A string representing the value in the input field
                            </ReactTooltip>
                            <div>{"}"}</div>
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
                fontSize: '40px'
            }
        }

    },

    example: {
        transition: 'background-color 0.4s ease-out',
        cursor: 'pointer',
        //textDecoration: 'underline',
        ':hover' : {
            backgroundColor: 'rgba(255,255,0,1)',
        }
    },

    separator: {
        borderLeft: '1px solid black',
        marginRight: '24px',
        marginLeft: '24px'
    }

};

OnboardingState.propTypes = {};
OnboardingState.defaultProps = {};

export default Radium(OnboardingState);
