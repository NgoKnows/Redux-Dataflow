import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import WhiteSpace from '../Reusable/WhiteSpace'
import Definition from '../Reusable/Definition'
import ReactTooltip from 'react-tooltip'

const pureDefinition = ['A pure function is a function that when it ', 'gets the same input, it always returns', 'the same output, and has no side-effects'];

class OnboardingReducer extends Component {

    render() {
        return (
            <div style={STYLES.container}>
                <div style={STYLES.title.main}>
                    Changes are made with pure functions - <span style={STYLES.emphasis}>Reducers</span>
                </div>
                <div style={STYLES.content.container}>
                    <ul style={STYLES.content.list}>
                        <li style={STYLES.content.listItem}>
                            A reducer is a <Definition word="pure function" definition={pureDefinition}/>, which takes the previous state and an action, and returns a new state
                        </li>
                        <li style={STYLES.content.listItem}>
                            Essentially Reducers interpret actions, and determine how actions, should change the state
                        </li>
                    </ul>
                    <div style={STYLES.separator}/>
                    <div style={STYLES.content.display.container}>
                        <div style={STYLES.content.display.title}>
                            What does a <span style={STYLES.emphasis}>Reducer</span> look like?
                        </div>
                        <div style={STYLES.content.display.main}>
                            <div style={STYLES.example} data-tip data-for="reducerFunction" key="reducerFunction">
                                {'function todos(state=[], action) {'}
                            </div>
                            <ReactTooltip id="reducerFunction" place="top" type="info" effect="solid" class="example">
                                Typical function signature of a reducer, state (with some initial state), and an action
                            </ReactTooltip>

                            <div style={STYLES.example} data-tip data-for="switch" key="switch">
                                <WhiteSpace tabs={1}/>
                                {'switch (action.type) {'}
                            </div>
                            <ReactTooltip id="switch" place="top" type="info" effect="solid" class="example">
                                A switch statement is just one way of determining <br/>
                                    what you do based on the type of the action
                            </ReactTooltip>


                            <div style={STYLES.example} data-tip data-for="case" key="case">
                                <WhiteSpace tabs={2}/>
                                {'case \'ADD_TODO\':'}
                            </div>
                            <ReactTooltip id="case" place="top" type="info" effect="solid" class="example">
                                Each case statement checks for what type of action has been dispatched
                            </ReactTooltip>

                            <div style={STYLES.example} data-tip data-for="return" key="return">
                                <div><WhiteSpace tabs={3}/>{'return ['}</div>
                                <div><WhiteSpace tabs={4}/>{'...state,'}</div>
                                <div><WhiteSpace tabs={4}/>{'{text: action.todo, completed: false}'}</div>
                                <div><WhiteSpace tabs={3}/>{'];'}</div>
                            </div>

                            <ReactTooltip id="return" place="top" type="info" effect="solid" class="example">
                                Here we take the current state and we add another todo to the <br/>
                                end of it. It is important to note that we are not mutating <br/>
                                state, we are creating a new array, and returning that.
                            </ReactTooltip>


                            <div><WhiteSpace tabs={2}/>{'case \'REMOVE_TODO\':'}</div>
                            <div><WhiteSpace tabs={3}/>{'//code to remove todo'}</div>

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
            fontSize: '32px',
            textAlign: 'center'
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
            fontSize: '30px',
            letterSpacing: '0.5',
            width: '40%',
            margin: 0
        },

        listItem: {
            marginBottom: '24px'
        },

        display: {
            container: {
                width: '60%'
            },

            title: {
                fontSize: '26px',
                marginBottom: '12px',
            },

            main: {
                fontFamily: 'Simplifica',
                fontSize: '32px',
                letterSpacing: '0.3px'
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

OnboardingReducer.propTypes = {};
OnboardingReducer.defaultProps = {};

export default Radium(OnboardingReducer);
