import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CommentListContainer from '../containers/CommentListContainer'
import PostVotingContainer from '../containers/PostVotingContainer'
import { formatTimestamp } from '../utils/helpers'
import CreateEditPostContainer from '../containers/CreateEditPostContainer'
import { POST_ACTION } from '../actions/types'
import isEmpty from 'lodash/isEmpty'

class PostDetail extends Component {

    componentWillMount() {
        const { postId } = this.props.match.params
        this.props.fetchPost(postId)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.post !== undefined && !isEmpty(nextProps.post.error)) {
            this.props.history.push('/404')
        }
    }

    renderPost(post) {
        return (
            <div>
                <h2 className="content-subhead">{post.title}</h2>
                <p className="post-meta">
                    Posted on {formatTimestamp(post.timestamp)} by <a href="#" className="post-author">{post.author}</a> under <a className="post-category" href="#">{post.category}</a> 
                </p>
                <p>{post.body}</p>
            </div>
        )
    }

    deletePost = () => {
        this.props.deletePost(this.props.post)
    }

    render() {
        const { postId } = this.props.match.params
        const { post, postAction } = this.props
        const isEditing = (postAction === POST_ACTION.EDIT_POST)

        return (
            <div className="post">
                <div className="main-content-button">
                    <Link to="/" onClick={this.deletePost} className="pure-button button-error">Delete Post</Link> | 
                    <Link to={`/post/${this.props.match.params.postId}/edit`} className="pure-button pure-button-primary">Edit Post</Link>
                </div>
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