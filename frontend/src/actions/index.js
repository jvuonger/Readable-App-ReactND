import * as ReadableAPI from '../utils/ReadableAPI'

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
export const EDIT_POST = "EDIT_POST"
export const DELETE_POST = "DELETE_POST"
export const REQUEST_POST = "REQUEST_POST"
export const RECEIVE_POST = "RECEIVE_POST"
export const REQUEST_POSTS = "REQUEST_POSTS"
export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const UPVOTE_POST = "UPVOTE_POST"
export const DOWNVOTE_POST = "DOWNVOTE_POST"

export const fetchPost = postId => dispatch => {
    dispatch(requestPost(postId))

    let apiUrl = `${api}/posts/${postId}`

    return fetch(apiUrl, { headers })
        .then(res => res.json())
        .then(json => dispatch(receivePost(postId, json)))
}

export const fetchPosts = (category = 'all') => dispatch => {
    dispatch(requestPosts(category))

    let apiUrl = `${api}/posts`

    if(category !== 'all') {
        apiUrl = `${api}/${category}/posts`
    }

    return fetch(apiUrl, { headers })
        .then(res => res.json())
        .then(json => dispatch(receivePosts(category, json)))
}

const deletePost = postId =>{
    return {
        type: DELETE_POST,
        postId
    }
}

const editPost = (postId, json) => {
    return {
        type: EDIT_POST,
        postId,
        post: json
    }
}

export const sendDeletePost = post => dispatch => {
    ReadableAPI.deletePost(post.id)
        .then(dispatch(deletePost(post.id)))
}

export const sendEditPost = post => dispatch => {
    ReadableAPI.editPost(post.id, post)
        .then(dispatch(editPost(post.id)))
}


const requestPost = postId =>{
    return {
        type: REQUEST_POST,
        postId
    }
}

const receivePost = (postId, json) => {
    return {
        type: RECEIVE_POST,
        postId,
        post: json
    }
}

const requestPosts = category =>{
    return {
        type: REQUEST_POSTS,
        category
    }
}

const receivePosts = (category, json) => {
    return {
        type: RECEIVE_POSTS,
        category,
        posts: json
    }
}

const upvotePost = post => {
    return {
        type: UPVOTE_POST,
        post
    }
}

const downvotePost = post => {
    return {
        type: DOWNVOTE_POST,
        post
    }
}

export const sendUpvotePost = post => dispatch => {
    ReadableAPI.votePost(post.id, 'upVote')
        .then(dispatch(upvotePost(post)))
}

export const sendDownvotePost = post => dispatch => {
    ReadableAPI.votePost(post.id, 'downVote')
        .then(dispatch(downvotePost(post)))
}


/* Comment Actions */
export const EDIT_COMMENT = "EDIT_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const REQUEST_COMMENTS = "REQUEST_COMMENTS"
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const UPVOTE_COMMENT = "UPVOTE_COMMENT"
export const DOWNVOTE_COMMENT = "DOWNVOTE_COMMENT"

const deleteComment = commentId =>{
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

const editComment = (commentId, json) => {
    return {
        type: EDIT_COMMENT,
        commentId,
        comment: json
    }
}

export const sendDeleteComment = comment => dispatch => {
    ReadableAPI.deleteComment(comment.id)
        .then(dispatch(deleteComment(comment.id)))
}

export const sendEditComment = comment => dispatch => {
    ReadableAPI.editPost(comment.id, comment)
        .then(dispatch(editComment(comment.id)))
}

export function fetchComments(postId) {
    return dispatch => {
        dispatch(requestComments(postId))

        let apiUrl = `${api}/posts/${postId}/comments`

        return fetch(apiUrl, { headers })
            .then(res => res.json())
            .then(json => dispatch(receiveComments(postId, json)))
    
    }
}

const requestComments = postId => {
    return {
        type: REQUEST_COMMENTS,
        postId
    }
}

const receiveComments = (postId, json) => {
    return {
        type: RECEIVE_COMMENTS,
        comments: json,
        postId
    }
}

const upvoteComment = comment => {
    return {
        type: UPVOTE_COMMENT,
        comment
    }
}

const downvoteComment = comment => {
    return {
        type: DOWNVOTE_COMMENT,
        comment
    }
}

export const sendUpvoteComment = comment => dispatch => {
    ReadableAPI.voteComment(comment.id, 'upVote')
        .then(dispatch(upvoteComment(comment)))
}

export const sendDownvoteComment = comment => dispatch => {
    ReadableAPI.voteComment(comment.id, 'downVote')
        .then(dispatch(downvoteComment(comment)))
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