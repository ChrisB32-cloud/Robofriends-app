import { CHANGE_SEARCHFIELD, FILTER_ROBOTS } from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

export const setFilteredRobots = (robots) => ({
    type: FILTER_ROBOTS,
    payload: robots
})