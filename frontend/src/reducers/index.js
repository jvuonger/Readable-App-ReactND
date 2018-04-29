import { combineReducers } from 'redux'
import sortFilter from './sortFilter'
import posts from './posts'
import comments from './comments'

const rootReducer = combineReducers({posts, comments, sortFilter})

export default rootReducer