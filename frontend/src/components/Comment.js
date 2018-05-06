import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'
import CommentVotingContainer from '../containers/CommentVotingContainer'
import CommentEditContainer from '../containers/CommentEditContainer'
import CommentFormContainer from '../containers/CommentFormContainer'
import { formatTimestamp } from '../utils/helpers'

class Comment extends Component {
    render() {
        let { comment, isEditing } = this.props

        return (
            <div className="comment-item" key={comment.id}>
                {isEditing && <CommentFormContainer comment={comment} isEditing={true} />}
                {!isEditing && comment.body}
                <p>Comment by: {comment.author} on {formatTimestamp(comment.timestamp)}</p>
                <CommentVotingContainer comment={comment} />
                <CommentEditContainer comment={comment} isEditing={isEditing} />
            </div>
        )
    }
}

export default Comment