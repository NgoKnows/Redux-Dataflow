import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, TOGGLE_TODO,
    SET_TODO_INPUT_REDUX, ADD_TODO_REDUX, REMOVE_TODO_REDUX, TOGGLE_TODO_REDUX,
    SET_DISPATCHING, SET_CURRENT_ACTION, SET_REDUCER_LINE,
    SET_CHANGED, SET_SECTION, SET_AUTO, SET_SPEED, SET_CURRENT_STEP, SET_STEPPING
} from './constants'

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


// Redux TODO Actions
// --------------------------------------------------
export function setTodoInputRedux(value) {
    return {
        type: SET_TODO_INPUT_REDUX,
        value
    }
}

export function addTodoRedux(todo) {
    return {
        type: ADD_TODO_REDUX,
        todo
    }
}

export function removeTodoRedux(index) {
    return {
        type: REMOVE_TODO_REDUX,
        index
    }
}

export function toggleTodoRedux(index) {
    return {
        type: TOGGLE_TODO_REDUX,
        index
    }
}


// Redux Actions
// --------------------------------------------------
export function setDispatching(dispatching) {
    return {
        type: SET_DISPATCHING,
        dispatching
    }
}

export function setCurrentAction(action) {
    return {
        type: SET_CURRENT_ACTION,
        action
    }
}

export function setReducerLine(line) {
    return {
        type: SET_REDUCER_LINE,
        line
    }
}

export function setChanged(changed) {
    return {
        type: SET_CHANGED,
        changed
    }
}

export function setSection(section) {
    return {
        type: SET_SECTION,
        section
    }
}

export function setAuto(auto) {
    return {
        type: SET_AUTO,
        auto
    }
}

export function setSpeed(speed) {
    return {
        type: SET_SPEED,
        speed
    }
}

export function setCurrentStep(step) {
    return {
        type: SET_CURRENT_STEP,
        step
    }
}

export function setStepping(stepping) {
    return {
        type: SET_STEPPING,
        stepping
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

export function addTodoThunkRedux() {
    return (dispatch, getState) => {
        const input = getState().todoInputRedux;

        dispatch(addTodoRedux(input));
        dispatch(setTodoInputRedux(''));
    }
}