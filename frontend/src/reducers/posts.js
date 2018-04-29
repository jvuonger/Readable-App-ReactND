import { 
    REQUEST_POST,
    RECEIVE_POST,
    REQUEST_POSTS, 
    RECEIVE_POSTS,
    UPVOTE_POST,
    DOWNVOTE_POST
} from '../actions'

const initialState = {
    isFetching: false,
    posts: [],
    post: {},
    category : 'all'
}

const posts = (state = initialState, action) => {
    let currentPost = {}
    switch(action.type) {
        case REQUEST_POST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_POST:
            return Object.assign({}, state, {
                isFetching: false,
                post: action.post
            })
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
            if ('id' in state.post && state.post.id === action.post.id) {
                currentPost = {...state.post, voteScore: ++state.post.voteScore }
            }
            return Object.assign({}, state, {
                post: currentPost,
                posts: state.posts.map(post => 
                    ( post.id === action.post.id ) ?
                        { ...post, voteScore: ++post.voteScore} :
                        post
                )
            })
        case DOWNVOTE_POST:
            if ('id' in state.post && state.post.id === action.post.id) {
                currentPost = {...state.post, voteScore: --state.post.voteScore }
            }
            return Object.assign({}, state, {
                post: currentPost,
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