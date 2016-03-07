import * as actions from './actions'

import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from 'flux/constants'

const cases = ['case ADD_TODO:', 'case REMOVE_TODO:',
    'case TOGGLE_TODO:', 'case SET_TODO_INPUT:'];

export default function dispatchAction(actionName, param) {
    return (dispatch, getState) => {
        dispatch(actions.setChanged({}));

        //don't dispatch if currently dispatching
        if (!getState().redux.dispatching) {
            //freeze ui
            dispatch(actions.setDispatching(true));


            //Action
            //-------------------------------
            dispatch(actions.setSection('action'));

            let actionPromise;
            //show this action in the right pane
            if (actionName.endsWith('Thunk')) {
                actionPromise = new Promise((fulfill, reject) => {
                    setTimeout(() => {
                        dispatch(actions.setCurrentAction(actions[actionName.substring(0, actionName.length - 5)](getState().todoInput)));
                    }, 750);

                    setTimeout(() => {
                        fulfill();
                    }, 2200);
                });
            } else {
                actionPromise = new Promise((fulfill, reject) => {
                    setTimeout(() => {
                        dispatch(actions.setCurrentAction(actions[actionName](param)));
                    }, 750);

                    setTimeout(() => {
                        fulfill();
                    }, 2200);
                });
            }

            actionPromise
                .then(() => {
                    dispatch(actions.setSection('reducer'));

                    let reducerLinePromises = [];
                    ////traverse through the reducer code
                    for (let i = 0; i <= 3; i++) {
                        reducerLinePromises.push(new Promise((fulfill, reject) => {
                            setTimeout(() => {
                                dispatch(actions.setReducerLine(i));
                                fulfill();
                            }, 1200 * (i + 1));
                        }))

                        if (cases[i].includes(getState().redux.currentAction.type)) {
                            break;
                        }
                    }

                    return Promise.all(reducerLinePromises);
                })
                .then(() => {
                    let setSectionPromise = new Promise((fulfill, reject) => {
                        setTimeout(() => {
                            dispatch(actions.setSection('state'));
                            dispatch(actions.setReducerLine(null));
                            fulfill();
                        }, 1200);
                    });

                    let changed = {};
                    switch (getState().redux.currentAction.type) {
                        case ADD_TODO:
                            changed.todos = getState().todos.length;
                            changed.todoInput = false;
                            break;

                        case REMOVE_TODO:
                            changed.todos = null;
                            changed.todoInput = false;
                            break;

                        case TOGGLE_TODO:
                            changed.todos = param;
                            changed.todoInput = false;
                            break;

                        case SET_TODO_INPUT:
                            changed.todos = null;
                            changed.todoInput = true;
                            break;
                    }

                    setSectionPromise
                        .then(() => {
                            return new Promise((fulfill, reject) => {
                                setTimeout(() => {
                                    ////update redux todos
                                    dispatch(actions[actionName + 'Redux'](param));
                                    dispatch(actions.setChanged(changed));
                                    fulfill();
                                }, 1000);
                            })
                                .then(() => {
                                    return new Promise((fulfill, reject) => {
                                        setTimeout(() => {
                                            //update todos
                                            dispatch(actions.setDispatching(false));
                                            dispatch(actions.setSection(''));
                                            fulfill();
                                        }, 1000);
                                    })
                                        .then(() => {
                                            //unfreeze ui
                                            setTimeout(() => {
                                                dispatch(actions[actionName](param));
                                                dispatch(actions.setCurrentAction({}));
                                            }, 750)
                                        })
                                })
                        })
                })

        }
    }
}