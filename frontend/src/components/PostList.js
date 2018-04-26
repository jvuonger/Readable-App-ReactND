import { connect } from 'react-redux'
import React, { Component } from 'react'
import PostListItem from './PostListItem'
import * as ReadableAPI from '../utils/ReadableAPI'
import { SortFilters, setSortFilter } from '../actions'

class PostList extends Component {
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

    render() {
        const { setSortFilter, sortFilter } = this.props
        let { posts } = this.state

        switch(sortFilter) {
            case SortFilters.VOTES_ASCENDING:
                posts = this.state.posts.slice(0).sort((a,b) => a.voteScore < b.voteScore)
                break;
            case SortFilters.VOTES_DESCENDING:
                posts = this.state.posts.slice(0).sort((a,b) => a.voteScore > b.voteScore)
                break;
            case SortFilters.DATE_ASCENDING:
                posts = posts.slice(0).sort((a,b) => a.timestamp < b.timestamp)
                break;
            case SortFilters.DATE_DESCENDING:
            default:
                posts = this.state.posts.slice(0).sort((a,b) => a.timestamp > b.timestamp)
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

const mapStateToProps = state => ({
    sortFilter: state.sortFilter
})

const mapDispatchToProps = dispatch => ({
    setSortFilter: filter => dispatch(setSortFilter(filter)),
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)