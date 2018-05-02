import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'
import CommentVotingContainer from '../containers/CommentVotingContainer'
import CommentEditContainer from '../containers/CommentEditContainer'
import CommentForm from '../components/CommentForm'
import { formatTimestamp } from '../utils/helpers'

class Comment extends Component {
    render() {
        let { comment } = this.props
        return (
            <div key={comment.id}>
                <p>{comment.body}</p>
                <span>Comment by: {comment.author} on {formatTimestamp(comment.timestamp)}</span>
                <CommentVotingContainer entity={comment} />
                <CommentEditContainer entity={comment} />
            </div>
        )
    }
}

export default Comment