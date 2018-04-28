import { 
    REQUEST_POSTS, 
    RECEIVE_POSTS,
    UPVOTE_POST,
    DOWNVOTE_POST
} from '../actions'

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
                didInvalidate: false,
                category: action.category
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                posts: action.posts
            })
        case UPVOTE_POST:
            return Object.assign({}, state, {
                posts: state.posts.map(post => 
                    ( post.id === action.post.id ) ?
                        { ...post, voteScore: ++post.voteScore} :
                        post
                )
            })
        case DOWNVOTE_POST:
            return Object.assign({}, state, {
                posts: state.posts.map(post => 
                    ( post.id === action.post.id ) ?
                        { ...post, voteScore: --post.voteScore } :
                        post
                )
            })
        default:
            return state
    }
}

export default posts