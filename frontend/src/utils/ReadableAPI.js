import { api, headers } from '../utils/config'

/**
 * GET /categories
 * Get all of the categories available for the app. List is found in categories.js.
 */
export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

/** 
 * GET /:category/posts
 * Get all of the posts for a particular category
 */
export const getAllPostsInCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

/** 
 * GET /posts
 * Get all of the posts. Useful for the main page when no category is selected.
 */
export const getAllPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)

/**
 * POST /posts
 * Add a new post
 * 
 * Params:
 *  id - UUID should be fine, but any unique id will work
 *  timestamp - timestamp in whatever format you like, you can use Date.now() if you like
 *  title - String
 *  body - String
 *  author - String
 *  category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
 */
export const addPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
    .then(data => data)

/**
 * GET /posts/:id
 * Get the details of a single post
 */
export const postDetail = (post_id) => 
  fetch(`${api}/posts/${post_id}`, { headers })
    .then(res => res.json())
    .then(data => data)

/**
 * POST /posts/:id
 * Vote on a Post
 *   option - String: either 'upVote' or 'downVote'
 */
export const votePost = (post_id, option) =>
  fetch(`${api}/posts/${post_id}`, {
      method: 'POST',
      headers: {
          ...headers,
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ option })
  }).then(res => res.json())
    .then(data => data)

/**
 * PUT /posts/:id
 * Edit the details of an existing post
 */
export const editPost = (post_id, post) => {
  const { title, body } = post
  return fetch(`${api}/posts/${post_id}`, {
      method: 'PUT',
      headers: {
          ...headers,
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ title, body })
  }).then(res => res.json())
    .then(data => data)
}

/**
 * DELETE /posts/:id
 * Sets the deleted flag for a post to 'true'.
 * Sets the parentDeleted flag for all child comments to 'true'
 */
export const deletePost = (post_id) =>
    fetch(`${api}/posts/${post_id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type' : 'application/json'
        }
    }).then(res => res.json())
        .then(data => data)

/**
 * GET /posts/:id/comments
 * Get all the comments for a single post
 */
export const getAllPostComments = (post_id) =>
    fetch(`${api}/posts/${post_id}/comments`, {headers})
        .then(res => res.json())
        .then( data => data )

/**
 * POST /comments
 * Add a comment to a post
 * 
 * Params:
 *   id: any unique ID.  As with posts, UUID is probably the best here
 *   timestamp: timestamp
 *   body: String
 *   author: String
 *   parentId: Should match a post id in the database
 */
export const addComment = (comment) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(comment)
    }).then(res => res.json())
      .then(data => data)

/**
 * GET /comments/:id
 * Get the details for a single comment
 */
export const getComment = (comment_id) => 
    fetch(`${api}/comments/${comment_id}`, { headers })
        .then(res => res.json())
        .then(data => data)

/**
 * POST /comments/:id
 * Used for voting on a comment.
 */
export const voteComment = (comment_id, option) => 
    fetch(`${api}/comments/${comment_id}`, { 
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({option})
    }).then(res => res.json())
      .then(data => data)

/**
 * PUT /comments/:id
 * Edit the details of an existing element
 * 
 * Params:
 *   timestamp: timestamp. Get this however you want.
 *   body: String
 */
export const editComment = (comment_id, comment) => 
    fetch(`${api}/comments/${comment_id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ timestamp: comment.created, body: comment.body })
    }).then(res => res.json())
      .then(data => data)

/**
 * DELETE /comments/:id
 * Sets a comment's deleted flag to 'true'
 */
export const deleteComment = (comment_id) =>
    fetch(`${api}/comments/${comment_id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type' : 'application/json'
        }
    }).then(res => res.json())
      .then(data => data )