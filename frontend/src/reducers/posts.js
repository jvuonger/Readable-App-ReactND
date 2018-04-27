import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions'

const initialState = {
    isFetching: false,
    posts: [],
    category : 'all'
}

const posts = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                posts: action.posts
            })
        default:
            return state
    }
}

export default posts