import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostListItem from './PostListItem'
import { SortFilters } from '../actions'

class PostList extends Component {

    componentDidMount() {   
        this.props.fetchPosts(this.props.filterCategory)
    }

    sortPosts(posts, filter) {
        switch(filter) {
            case SortFilters.VOTES_ASCENDING:
                posts = posts.slice(0).sort((a,b) => a.voteScore - b.voteScore)
                break;
            case SortFilters.VOTES_DESCENDING:
                posts = posts.slice(0).sort((a,b) => b.voteScore - a.voteScore)
                break;
            case SortFilters.DATE_ASCENDING:
                posts = posts.slice(0).sort((a,b) => a.timestamp - b.timestamp)
                break;
            case SortFilters.DATE_DESCENDING:
            default:
                posts = posts.slice(0).sort((a,b) => b.timestamp - a.timestamp)
        }

        return posts
    }

    renderTitle(category) {
        if(category === 'all') {
            return <h1>Readable</h1>
        } else {
            return <h1>{category}</h1>
        }
    }

    renderPosts(posts) {
        return posts.map((post) => (
            <PostListItem 
                key={post.id}
                post={post}
            />
        ))
    }

    render() {
        const { setSortFilter, sortFilter, filterCategory } = this.props
        let { posts } = this.props.posts
      
        posts = this.sortPosts(posts, sortFilter)

        return (
            <div>
                <div className="main-content-button">
                    <Link to="/create" className="pure-button pure-button-primary">Create a Post</Link>
                </div>

                <div className="header">
                    { this.renderTitle(filterCategory) }
                </div>

                <div id="sort-bar">
                    Order Posts By: 
                    <button className="pure-button" onClick={() => setSortFilter(SortFilters.VOTES_DESCENDING)}>Most Votes</button> |
                    <button className="pure-button" onClick={() => setSortFilter(SortFilters.VOTES_ASCENDING)}>Least Votes</button> | 
                    <button className="pure-button" onClick={() => setSortFilter(SortFilters.DATE_DESCENDING)}>Most Recent</button> |
                    <button className="pure-button" onClick={() => setSortFilter(SortFilters.DATE_ASCENDING)}>Oldest</button>
                </div>

                { this.renderPosts(posts) }
            </div>
        )
    }
}

export default PostList