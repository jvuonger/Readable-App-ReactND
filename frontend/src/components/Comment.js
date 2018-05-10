import React, { Component } from 'react'
import CommentVotingContainer from '../containers/CommentVotingContainer'
import CommentEditContainer from '../containers/CommentEditContainer'
import CommentFormContainer from '../containers/CommentFormContainer'
import { formatTimestamp } from '../utils/helpers'

class Comment extends Component {
    render() {
        let { comment, isEditing } = this.props

        return (
            <div className="comment-item" key={comment.id}>
                <CommentVotingContainer comment={comment} />
                {isEditing && <CommentFormContainer comment={comment} isEditing={true} />}
                {!isEditing && comment.body}
                <span className="comment-meta">
                    Comment by: {comment.author} on {formatTimestamp(comment.timestamp)} <br />
                    <CommentEditContainer comment={comment} isEditing={isEditing} />
                </span>
            </div>
        )
    }
}

export default Comment