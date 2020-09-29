import { combineReducers } from 'redux'
import authReducer from './authReducer'
import loadReducer from './loadReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    load: loadReducer
});

export default rootReducer