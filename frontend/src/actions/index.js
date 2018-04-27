
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

export function fetchPosts(category = 'all') {
    return dispatch => {
        dispatch(requestPosts(category))
        return fetch(`${api}/posts`, { headers })
            .then(res => res.json())
            .then(json => dispatch(receivePosts(category, json)))
    
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