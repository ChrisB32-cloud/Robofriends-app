import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

// This is returning an Object
export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

// This is NOT returning an object we're returning a function reference (redux-thunk)
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }))
}

// export const setFilteredRobots = (robots) => ({
//     type: FILTER_ROBOTS,
//     payload: robots
// })