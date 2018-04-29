import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'
import CommentVotingContainer from '../containers/CommentVotingContainer'

class Comment extends Component {
    render() {
        let { comment } = this.props
        return (
            <div key={comment.id}>
                <p>{comment.body}</p>
                <span>Comment by: {comment.author} on {comment.timestamp}</span>
                <CommentVotingContainer entity={comment} />
                <span>
                    <a href="#edit" onClick={this.handleEditComment}>Edit</a>
                    <a href="#delete" onClick={this.handleDeleteComment}>Delete</a>
                </span>
            </div>
        )
    }
}

export default Comment