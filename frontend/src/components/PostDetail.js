import React, { Component } from 'react';
import { format } from 'date-fns'
import CommentListContainer from '../containers/CommentListContainer'
import PostVotingContainer from '../containers/PostVotingContainer'

class PostDetail extends Component {

    componentDidMount() {
        const { postId } = this.props.match.params
        this.props.fetchPost(postId)
    }

    render() {
        const { postId } = this.props.match.params
        const { post } = this.props
        let formattedDateTime = format(new Date(post.timestamp), 'MM/DD/YYYY')
        return (
            <div className="content">
                <h2 className="content-subhead">{post.title}</h2>
                <p className="post-meta">
                    Posted on {formattedDateTime} by <a href="#" className="post-author">{post.author}</a> under <a className="post-category" href="#">{post.category}</a> 
                </p>
                <p>{post.body}</p>
                 <PostVotingContainer entity={post} /> 
                <span>Comments: {post.commentCount}</span>
                <hr />
                <CommentListContainer postId={postId} />
            </div>
        )
    }
}

export default PostDetail