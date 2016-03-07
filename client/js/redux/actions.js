import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './constants'
import request from 'superagent-bluebird-promise'

// TODO Actions
// --------------------------------------------------
export function setTodoInput(value) {
    return {
        type: SET_TODO_INPUT,
        value
    }
}

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

export function removeTodo(index) {
    return {
        type: REMOVE_TODO,
        index
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

// Thunks
// --------------------------------------------------
export function addTodoThunk() {
    return (dispatch, getState) => {
        const input = getState().todoInput;

        dispatch(addTodo(input));
        dispatch(setTodoInput(''));
    }
}
