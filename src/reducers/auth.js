import { combineReducers } from 'redux'
import {
    LOGIN,
    LOGOUT
} from '../actions'

function auth(state = { }, action) {
    switch (action.type) {
        case LOGIN:
            return {

            }
        case LOGOUT:
            return { }
        default:
            return state
    }
}

export default combineReducers({
    auth
})
