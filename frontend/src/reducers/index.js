import { combineReducers } from 'redux'
import sortFilter from './sortFilter'
import posts from './posts'

const rootReducer = combineReducers({posts, sortFilter})

export default rootReducer