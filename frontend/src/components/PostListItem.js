import React, { Component } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import PostVotingContainer from '../containers/PostVotingContainer'
import PostEditActionsContainer from '../containers/PostEditActionsContainer'
import { formatTimestamp } from '../utils/helpers'

class PostListItem extends Component {

    render() {
        const { post } = this.props

        return (

            <div className="content">
                <h2 className="content-subhead">
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="post-meta">
                    Posted on {formatTimestamp(post.timestamp)} by <a href="#" className="post-author">{post.author}</a> under <a className="post-category" href="#">{post.category}</a> 
                </p>
                <p>{post.body}</p>
                <PostVotingContainer entity={post} />
                <PostEditActionsContainer entity={post} />
                <span>Comments: {post.commentCount}</span>
            </div>
        )
    }
}

export default PostListItem