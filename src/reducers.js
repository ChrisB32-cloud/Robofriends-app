import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

// A pure function always needs to return something

const intialStateSearch = {
    searchField: ''
}

export const searchRobots = (state = intialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, { searchField: action.payload })
        // My prefered way below
        // return { ...state, { searchField: action.payload }}
        // case FILTER_ROBOTS:
        //     return state.filter(robot => robot.name.toLowerCase().includes(action.payload.toLowerCase()))
        default:
            return state;
    }
}

const intialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
}

export const requestRobots = (state = intialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state
    }
}