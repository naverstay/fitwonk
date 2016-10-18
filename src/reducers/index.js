import { combineReducers } from 'redux'

import { default as auth } from './auth'
import { default as training } from './training'

const rootReducer = combineReducers({
    auth, training
})

export default rootReducer
