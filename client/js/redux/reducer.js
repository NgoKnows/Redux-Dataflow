import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, TOGGLE_TODO,
    SET_TODO_INPUT_REDUX, ADD_TODO_REDUX, REMOVE_TODO_REDUX, TOGGLE_TODO_REDUX,
    SET_DISPATCHING, SET_CURRENT_ACTION, SET_REDUCER_LINE, SET_SPEED, SET_CHANGED, SET_SECTION,
} from './constants'

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import uuid from 'node-uuid';

// TODO
// --------------------------------------------------
function todos(state = [{text: 'Walk the Dog', completed: false, id: uuid.v4()}], action) {
    switch(action.type) {
        case ADD_TODO:
            //same as state.todos.concat([action.todo])
            return [
                ...state,
                {text: action.todo, completed: false, id: uuid.v4()}
            ];

        case REMOVE_TODO:
           return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]

        case TOGGLE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {completed: !state[action.index].completed}),
                ...state.slice(action.index + 1)
            ];

        default:
            return state;
    }
}

function todoInput(state = '', action) {
    switch(action.type) {

        case SET_TODO_INPUT:
            return action.value;

        default:
            return state;
    }
}

// Redux TODO
// --------------------------------------------------
function todosRedux(state = [{text: 'Walk the Dog', completed: false, id: uuid.v4()}], action) {
    switch(action.type) {
        case ADD_TODO_REDUX:
            //same as state.todos.concat([action.todo])
            return [
                ...state,
                {text: action.todo, completed: false}
            ];

        case REMOVE_TODO_REDUX:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]

        case TOGGLE_TODO_REDUX:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {completed: !state[action.index].completed}),
                ...state.slice(action.index + 1)
            ];

        default:
            return state;
    }
}

function todoInputRedux(state = '', action) {
    switch(action.type) {

        case SET_TODO_INPUT_REDUX:
            return action.value;

        default:
            return state;
    }
}

// Redux
// --------------------------------------------------
const initialState = {
    dispatching: false,
    currentAction: {},
    reducerLine: null,
    speed: 1,
    changed: {
        todos: null,
        todoInput: false
    },
    section: ''
}
function redux(state = initialState, action) {
    switch(action.type) {
        case SET_DISPATCHING:
            return Object.assign({}, state, {dispatching: action.dispatching});

        case SET_CURRENT_ACTION:
            return Object.assign({}, state, {currentAction: action.action});

        case SET_REDUCER_LINE:
            return Object.assign({}, state, {reducerLine: action.line});

        case SET_SPEED:
            return Object.assign({}, state, {speed: action.speed});

        case SET_CHANGED:
            return Object.assign({}, state, {changed: action.changed});

        case SET_SECTION:
            return Object.assign({}, state, {section: action.section});

        default:
            return state;
    }
}



const app = combineReducers({
    todos,
    todoInput,
    todosRedux,
    todoInputRedux,
    redux,
    routing: routerReducer
});

export default app;
