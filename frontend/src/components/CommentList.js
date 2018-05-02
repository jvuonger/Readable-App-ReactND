import React, { Component } from 'react'
import Comment from './Comment'
import CommentFormContainer from '../containers/CommentFormContainer'

class CommentList extends Component {
    componentDidMount() {
        this.props.fetchComments(this.props.postId)
    }

    render() {
        const { postId } = this.props
        const { comments } = this.props.comments

        return (
            <div>
                <div className="header">
                    <h3>Comments</h3>
                </div>

                { comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}

                <hr/>
                <CommentFormContainer postId={postId} />
            </div>
        )
    }
}

export default CommentList