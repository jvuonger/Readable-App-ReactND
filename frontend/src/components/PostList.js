import React, { Component } from 'react'
import PostListItem from './PostListItem'
import { SortFilters, setSortFilter } from '../actions'

class PostList extends Component {
    state = {
        posts : []
    }
    
    componentDidMount() {   
        this.props.fetchPosts(this.props.filterCategory)
    }

    render() {
        const { setSortFilter, sortFilter } = this.props
        let { posts } = this.props.posts

        switch(sortFilter) {
            case SortFilters.VOTES_ASCENDING:
                posts = posts.slice(0).sort((a,b) => a.voteScore < b.voteScore)
                break;
            case SortFilters.VOTES_DESCENDING:
                posts = posts.slice(0).sort((a,b) => a.voteScore > b.voteScore)
                break;
            case SortFilters.DATE_ASCENDING:
                posts = posts.slice(0).sort((a,b) => a.timestamp > b.timestamp)
                break;
            case SortFilters.DATE_DESCENDING:
            default:
                posts = posts.slice(0).sort((a,b) => a.timestamp < b.timestamp)
        }

        return (
            <div>
                <div className="header">
                    <h1>Readable Test</h1>
                </div>

                <div id="sort-bar">
                    Order Posts By: 
                    <button onClick={() => setSortFilter(SortFilters.VOTES_ASCENDING)}>Most Votes</button>
                    <button onClick={() => setSortFilter(SortFilters.VOTES_DESCENDING)}>Least Votes</button> | 
                    <button onClick={() => setSortFilter(SortFilters.DATE_DESCENDING)}>Most Recent</button>
                    <button onClick={() => setSortFilter(SortFilters.DATE_ASCENDING)}>Oldest</button>
                </div>

                { posts.map((post) => (
                    <PostListItem 
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        )
    }
}

export default PostList