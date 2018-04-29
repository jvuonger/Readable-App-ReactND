
const api = "http://localhost:3001"
// Generate a unique token for authorization header
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


/* Posts Actions */
export const REQUEST_POSTS = "REQUEST_POSTS"
export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const UPVOTE_POST = "UPVOTE_POST"
export const DOWNVOTE_POST = "DOWNVOTE_POST"

export function fetchPosts(category = 'all') {
    return dispatch => {
        dispatch(requestPosts(category))

        let apiUrl = `${api}/posts`

        if(category !== 'all') {
            apiUrl = `${api}/${category}/posts`
        }

        return fetch(apiUrl, { headers })
            .then(res => res.json())
            .then(json => dispatch(receivePosts(category, json)))
    
    }
}

export function sendUpvotePost(post) {
    return dispatch => {
        dispatch(upvotePost(post))
    }
}

export function sendDownvotePost(post) {
    return dispatch => {
        dispatch(downvotePost(post))
    }
}

function requestPosts(category) {
    return {
        type: REQUEST_POSTS,
        category
    }
}

function receivePosts(category, json) {
    return {
        type: RECEIVE_POSTS,
        category,
        posts: json
    }
}

function upvotePost(post) {
    return {
        type: UPVOTE_POST,
        post
    }
}

function downvotePost(post) {
    return {
        type: DOWNVOTE_POST,
        post
    }
}

/* Comment Actions */
export const REQUEST_COMMENTS = "REQUEST_COMMENTS"
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const UPVOTE_COMMENT = "UPVOTE_COMMENT"
export const DOWNVOTE_COMMENT = "DOWNVOTE_COMMENT"

export function fetchComments(postId) {
    return dispatch => {
        dispatch(requestComments(postId))

        let apiUrl = `${api}/posts/${postId}/comments`

        return fetch(apiUrl, { headers })
            .then(res => res.json())
            .then(json => dispatch(receiveComments(postId, json)))
    
    }
}

function requestComments(postId) {
    return {
        type: REQUEST_COMMENTS,
        postId
    }
}

function receiveComments(postId, json) {
    return {
        type: RECEIVE_COMMENTS,
        postId,
        comments: json
    }
}
function upvoteComment(comment) {
    return {
        type: UPVOTE_COMMENT,
        comment
    }
}

function downvoteComment(comment) {
    return {
        type: DOWNVOTE_COMMENT,
        comment
    }
}

export function sendUpvoteComment(comment) {
    return dispatch => {
        dispatch(upvoteComment(comment))
    }
}

export function sendDownvoteComment(comment) {
    return dispatch => {
        dispatch(downvoteComment(comment))
    }
}


/* Sort Filter Actions */
export const setSortFilter = filter => ({
    type : "SET_SORT_FILTER",
    filter
})

export const SortFilters = {
    VOTES_DESCENDING: 'VOTES_DESCENDING',
    VOTES_ASCENDING: 'VOTES_ASCENDING',
    DATE_DESCENDING: 'DATE_DESCENDING',
    DATE_ASCENDING: 'DATE_ASCENDING'
}