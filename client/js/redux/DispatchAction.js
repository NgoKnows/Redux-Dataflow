import * as actions from './actions'

import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from 'flux/constants'

const cases = ['case ADD_TODO:', 'case REMOVE_TODO:',
    'case TOGGLE_TODO:', 'case SET_TODO_INPUT:'];

export default function dispatchAction(actionName, param) {
    return (dispatch, getState) => {
        //don't dispatch if currently dispatching
        if (!getState().redux.dispatching) {
            //freeze ui
            dispatch(actions.setDispatching(true));


            //Action
            //-------------------------------
            dispatch(actions.setSection('action'));

            //show this action in the right pane
            if (actionName.endsWith('Thunk')) {
                dispatch(actions.setCurrentAction(actions[actionName.substring(0, actionName.length - 5)](getState().todoInput)));
            } else {
                dispatch(actions.setCurrentAction(actions[actionName](param)));
            }


            //Reducer
            //-------------------------------
            dispatch(actions.setSection('reducer'));

            let reducerLinePromises = [];
            ////traverse through the reducer code
            for (let i = 0; i <= 3; i++) {
                reducerLinePromises.push(new Promise((fulfill, reject) => {
                    setTimeout(() => {
                        dispatch(actions.setReducerLine(i));
                        fulfill();
                    }, 750 * i);
                }))

                if (cases[i].includes(getState().redux.currentAction.type)) {
                    break;
                }
            }


            //State
            //-------------------------------
            dispatch(actions.setSection('state'));

            Promise.all(reducerLinePromises)
                .then(() => {
                    ////update redux todos
                    dispatch(actions[actionName + 'Redux'](param));

                    let changed = {};
                    switch (getState().redux.currentAction.type) {
                        case ADD_TODO:
                            changed.todos = getState().length;
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

                    dispatch(actions.setChanged(changed));


                    ////update todos
                    dispatch(actions[actionName](param));

                    //set to no action
                    //dispatch(actions.setCurrentAction({}));

                    //unfreeze ui
                    dispatch(actions.setDispatching(false));

                    //dispatch(actions.setReducerLine(null));

                })

        }
    }
}