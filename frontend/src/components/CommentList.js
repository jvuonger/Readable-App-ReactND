import React, { Component } from 'react'
import Comment from './Comment'
import CommentFormContainer from '../containers/CommentFormContainer'

class CommentList extends Component {
    componentDidMount() {
        this.props.fetchComments(this.props.postId)
    }

    render() {
        const { postId, commentToEdit } = this.props
        const { comments } = this.props.comments

        return (
            <div>
                <div className="header">
                    <h3>Comments</h3>
                </div>
                
                <hr />

                <CommentFormContainer postId={postId} isEditing={false}/>

                <hr />

                { comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} isEditing={commentToEdit.isEditing && (comment.id === commentToEdit.data.id)}/>
                ))}

            </div>
        )
    }
}

export default CommentList