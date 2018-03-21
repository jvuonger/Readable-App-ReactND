import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'
import CommentForm from './CommentForm'

class CommentList extends Component {
    state = {
        comments : []
    }

    componentDidMount() {
        const { postId } = this.props

        ReadableAPI.getAllPostComments(postId).then((comments) => {
            this.setState({comments})
        })
    }

    render() {
        const { postId } = this.props
        const { comments } = this.state

        return (
            <div>
                <div className="header">
                    <h3>Comments</h3>
                </div>

                { comments.map((comment) => (
                    <div key={comment.id}>
                        <p>{comment.body}</p>
                        <h4>Comment by: {comment.author} on {comment.timestamp}</h4>
                    </div>
                ))}

                <hr/>
                <CommentForm postId={postId} />
            </div>
        )
    }
}

export default CommentList