import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import CommentListContainer from '../containers/CommentListContainer'
import PostVotingContainer from '../containers/PostVotingContainer'
import { formatTimestamp } from '../utils/helpers'
import CreateEditPostContainer from '../containers/CreateEditPostContainer'
import { POST_ACTION } from '../actions'

class PostDetail extends Component {

    componentDidMount() {
        const { postId } = this.props.match.params
        this.props.fetchPost(postId)
    }

    renderPost(post) {
        return (
            <div>
                <h2 className="content-subhead">{post.title}</h2>
                <Link to={`${this.props.match.url}/edit`}>Edit</Link>
                <p className="post-meta">
                    Posted on {formatTimestamp(post.timestamp)} by <a href="#" className="post-author">{post.author}</a> under <a className="post-category" href="#">{post.category}</a> 
                </p>
                <p>{post.body}</p>
            </div>
        )
    }

    render() {
        const { postId } = this.props.match.params
        const { post, postAction } = this.props

        const isEditing = (postAction === POST_ACTION.EDIT_POST)
        
        return (
            <div className="content">
                { isEditing ? <CreateEditPostContainer isEditing={isEditing} post={post} /> : this.renderPost(post) }

                <PostVotingContainer entity={post} /> 
                <span>Comments: {post.commentCount}</span>
                <hr />
                <CommentListContainer postId={postId} />
                
            </div>
        )
    }
}

export default PostDetail