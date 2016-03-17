import * as actions from './actions'

import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from 'flux/constants'

const cases = ['case ADD_TODO:', 'case REMOVE_TODO:',
    'case TOGGLE_TODO:', 'case SET_TODO_INPUT:'];

let speed;

let curAction;
let curParam;

export default function dispatchAction(actionName=curAction, param=curParam) {
    return (dispatch, getState) => {
        if (getState().redux.auto) {
            automaticDispatch(dispatch, getState, actionName, param);
        } else {
            manualDispatch(dispatch, getState, actionName, param);
        }
}

function automaticDispatch(dispatch, getState, actionName, param) {
    speed = getState().redux.speed;

    timeoutAction(() => dispatch(actions.setChanged({})), 0)
        .then(() => timeoutAction(() => dispatch(actions.setDispatching(true))), 0)
        .then(() => timeoutAction(() => dispatch(actions.setSection('action'))), 0)
        .then(() => {
            if (actionName.endsWith('Thunk')) {
                return timeoutAction(() => dispatch(actions.setCurrentAction(actions[actionName.substring(0, actionName.length - 5)](getState().todoInput))), 750);
            } else {
                return timeoutAction(() => dispatch(actions.setCurrentAction(actions[actionName](param))), 750);
            }
        })
        .then(() => timeoutAction(() => {}, 2000))
        .then(() => timeoutAction(() => dispatch(actions.setSection('reducer')), 0))
        .then(() => {
            let reducerLinePromises = [];
            ////traverse through the reducer code
            for (let i = 0; i <= 3; i++) {
                reducerLinePromises.push(timeoutAction(() => dispatch(actions.setReducerLine(i)), 1200 * (i + 1)))

                if (cases[i].includes(getState().redux.currentAction.type)) {
                    break;
                }
            }
            return Promise.all(reducerLinePromises);
        })
        .then(() => timeoutAction(() => {}, 1200))
        .then(() => timeoutAction(() => dispatch(actions.setSection('state')), 0))
        .then(() => timeoutAction(() => dispatch(actions.setReducerLine(null)), 0))
        .then(() => timeoutAction(() => {}, 1000))
        .then(() => timeoutAction(() => dispatch(actions[actionName + 'Redux'](param)), 0))
        .then(() => {
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

            return timeoutAction(() => dispatch(actions.setChanged(changed)), 0);
        })
        .then(() => timeoutAction(() => {}, 1000))
        .then(() => timeoutAction(() => dispatch(actions.setDispatching(false)), 0))
        .then(() => timeoutAction(() => dispatch(actions.setSection('')), 0))
        .then(() => timeoutAction(() => {}, 750))
        .then(() => timeoutAction(() => dispatch(actions[actionName](param)), 0))
        .then(() => timeoutAction(() => dispatch(actions.setCurrentAction({})), 200));
    }
}

function manualDispatch(dispatch, getState, actionName, param) {
    speed = getState().redux.speed;
    curAction = actionName;
    curParam = param;

    switch (getState().redux.currentStep) {
        case 1:
            step1(...arguments);
            break;

        case 2:
            step2(...arguments);
            break;

        case 3:
            step3(...arguments);
            break;

        case 4:
            step4(...arguments);
            break;
    }
}

function timeoutAction(dispatchAction, time) {
    return new Promise((fulfill, reject) => {
        setTimeout(() => {
            dispatchAction()
            fulfill()
        }, time * (1/speed));
    });
}

function step1(dispatch, getState, actionName, param) {
    timeoutAction(() => dispatch(actions.setStepping(true)), 0)
        .then(() => timeoutAction(() => dispatch(actions.setChanged({})), 0))
        .then(() => timeoutAction(() => dispatch(actions.setDispatching(true))), 0)
        .then(() => timeoutAction(() => dispatch(actions.setSection('action'))), 1000)
        .then(() => {
            if (actionName.endsWith('Thunk')) {
                return timeoutAction(() => dispatch(actions.setCurrentAction(actions[actionName.substring(0, actionName.length - 5)](getState().todoInput))), 750);
            } else {
                return timeoutAction(() => dispatch(actions.setCurrentAction(actions[actionName](param))), 750);
            }
        })
        .then(() => timeoutAction(() => dispatch(actions.setCurrentStep(2)), 0))
        .then(() => timeoutAction(() => dispatch(actions.setStepping(false)), 0))
}

function step2(dispatch, getState, actionName, param) {
    timeoutAction(() => dispatch(actions.setStepping(true)), 0)
        .then(() => timeoutAction(() => dispatch(actions.setSection('reducer')), 0))
        .then(() => {
            let reducerLinePromises = [];
            ////traverse through the reducer code
            for (let i = 0; i <= 3; i++) {
                reducerLinePromises.push(timeoutAction(() => dispatch(actions.setReducerLine(i)), 1200 * (i + 1)))

                if (cases[i].includes(getState().redux.currentAction.type)) {
                    break;
                }
            }
            return Promise.all(reducerLinePromises);
        })
        .then(() => timeoutAction(() => dispatch(actions.setCurrentStep(3)), 0))
        .then(() => timeoutAction(() => dispatch(actions.setStepping(false)), 0));

}

function step3(dispatch, getState, actionName, param) {
    timeoutAction(() => dispatch(actions.setStepping(true)), 0)
        .then(() => timeoutAction(() => dispatch(actions.setSection('state')), 0))
        .then(() => timeoutAction(() => dispatch(actions.setReducerLine(null)), 0))
        .then(() => timeoutAction(() => {}, 1000))
        .then(() => timeoutAction(() => dispatch(actions[actionName + 'Redux'](param)), 0))
        .then(() => {
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

            return timeoutAction(() => dispatch(actions.setChanged(changed)), 0);
        })
        .then(() => timeoutAction(() => dispatch(actions.setCurrentStep(4)), 0))
        .then(() => timeoutAction(() => dispatch(actions.setStepping(false)), 0));

}

function step4(dispatch, getState, actionName, param) {
    timeoutAction(() => dispatch(actions.setStepping(true)), 0)
        .then(() => timeoutAction(() => dispatch(actions.setDispatching(false)), 0))
        .then(() => timeoutAction(() => dispatch(actions.setSection('')), 0))
        .then(() => timeoutAction(() => {}, 750))
        .then(() => timeoutAction(() => dispatch(actions[actionName](param)), 0))
        .then(() => timeoutAction(() => dispatch(actions.setCurrentAction({})), 200))
        .then(() => timeoutAction(() => dispatch(actions.setCurrentStep(1)), 0))
        .then(() => timeoutAction(() => dispatch(actions.setStepping(false)), 0));
}

function step5() {

}

function step6() {

}

function step7() {

}