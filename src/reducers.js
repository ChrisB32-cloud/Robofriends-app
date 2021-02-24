import { CHANGE_SEARCHFIELD } from './constants'

// A pure function always needs to return something

const intialState = {
    searchField: ''
}

export const searchRobots = (state = intialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, { searchField: action.payload })
        // My prefered way below
        // return { ...state, { searchField: action.payload }}
        default:
            return state;
    }
}