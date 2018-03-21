import React, { Component } from 'react'
import Post from './Post'
import * as ReadableAPI from '../utils/ReadableAPI'

const SortDirection = {
    ASCENDING : 'asc',
    DESCENDING : 'desc'
}

class Posts extends Component {
    state = {
        posts : []
    }

    componentDidMount() {
        const { filterCategory } = this.props

        if(filterCategory === 'all') {
            ReadableAPI.getAllPosts().then((posts) => 
                this.setState({posts})
            )
        } else {
            ReadableAPI.getAllPostsInCategory(filterCategory).then((posts) =>
                this.setState({posts})
            )
        }
    }

    togglePostVoteSort = (direction) => {
        let posts = []
        // Ascending = display lowest votes first ( smaller votes first )
        // Descending = display most votes first ( bigger votes first )
        if(direction === SortDirection.ASCENDING) {
            posts = this.state.posts.slice(0).sort((a,b) => a.voteScore < b.voteScore)
        } else {
            posts = this.state.posts.slice(0).sort((a,b) => a.voteScore > b.voteScore)
        }
        this.setState({posts})
    }

    togglePostDateSort = (direction) => {
        let posts = []
        // Ascending = display older posts first ( smaller timestamps first )
        // Descending = display new posts first ( bigger timestamps first )
        if(direction === SortDirection.ASCENDING) {
            posts = this.state.posts.slice(0).sort((a,b) => a.timestamp < b.timestamp)
        } else {
            posts = this.state.posts.slice(0).sort((a,b) => a.timestamp > b.timestamp)
        }
        this.setState({posts})
    }

    render() {
        const { posts } = this.state

        return (
            <div>
                <div className="header">
                    <h1>Readable Test</h1>
                </div>

                <div id="sort-bar">
                    Order Posts By: 
                    <button onClick={() => this.togglePostVoteSort(SortDirection.ASCENDING)}>Most Votes</button>
                    <button onClick={() => this.togglePostVoteSort(SortDirection.DESCENDING)}>Least Votes</button> | 
                    <button onClick={() => this.togglePostDateSort(SortDirection.ASCENDING)}>Most Recent</button>
                    <button onClick={() => this.togglePostDateSort(SortDirection.DESCENDING)}>Oldest</button>
                </div>

                { posts.map((post) => (
                    <Post 
                        key={post.id}
                        id={post.id}
                        author={post.author}
                        title={post.title}
                        body={post.body}
                        category={post.category}
                        commentCount={post.commentCount}
                        createdAt={post.timestamp}
                        voteScore={post.voteScore}
                    />
                ))}
            </div>
        )
    }
}

export default Posts