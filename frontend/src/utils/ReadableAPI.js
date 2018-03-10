const api = "http://vagrant:3001"

// Generate a unique token for authorization header
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

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
    body: post
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
      body: { option }
  }).then(res => res.json())
    .then(data => data)

/**
 * PUT /posts/:id
 * Edit the details of an existing post
 */
export const editPost = (post_id, post) => {
  const { title, body } = post
  fetch(`${api}/posts/${post_id}`, {
      method: 'PUT',
      headers: {
          ...headers,
          'Content-Type' : 'application/json'
      },
      body: { title, body }
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
