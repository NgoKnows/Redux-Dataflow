import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './constants'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// TODO
// --------------------------------------------------
let todoState = {
    todos: [],
    todoInput: ''
};
function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            //same as state.todos.concat([action.todo])
            return [
                ...state,
                {text: action.todo, completed: false}
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

const app = combineReducers({
    todos,
    todoInput,
    routing: routerReducer
});

export default app;
