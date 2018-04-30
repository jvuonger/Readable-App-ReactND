import { 
    EDIT_COMMENT,
    DELETE_COMMENT,
    REQUEST_COMMENTS,
    RECEIVE_COMMENTS,
    UPVOTE_COMMENT,
    DOWNVOTE_COMMENT
} from '../actions'

const initialState = {
    isFetching: false,
    comments: []
}

const comments = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_COMMENT:
            return state
        case DELETE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => 
                    comment.id !== action.commentId
                )
            })
        case REQUEST_COMMENTS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_COMMENTS:
            return Object.assign({}, state, {
                isFetching: false,
                comments: action.comments
            })
        case UPVOTE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(comment => 
                    ( comment.id === action.comment.id ) ?
                        { ...comment, voteScore: ++comment.voteScore} :
                        comment
                )
            })
        case DOWNVOTE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(comment => 
                    ( comment.id === action.comment.id ) ?
                        { ...comment, voteScore: --comment.voteScore } :
                        comment
                )
            })
        default:
            return state
    }
}

export default comments