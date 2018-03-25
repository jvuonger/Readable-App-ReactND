import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: this.props.comment
        }
    }

    handleVoteComment = (type) => {
        if(type === "upVote") {
            ReadableAPI.voteComment(this.props.comment.id, "upVote").then((data) => {
                this.setState((prevState) => {
                    return {comment: Object.assign({}, prevState.comment, {voteScore: prevState.comment.voteScore + 1})}
                })
            })
        } else if (type === "downVote") {
            ReadableAPI.voteComment(this.props.comment.id, "downVote").then((data) => {
                this.setState((prevState) => {
                    return {comment: Object.assign({}, prevState.comment, {voteScore: prevState.comment.voteScore - 1})}
                })
            })
        } else {
            console.log('invalid vote')
        }
    }

    handleEditComment = () => {

    }

    handleDeleteComment = () => {
        ReadableAPI.deleteComment(this.state.comment.id).then((data) => {
            // Todo remove the comment from CommentList
            console.log('Deleted comment  ' + this.state.comment.id )
        })
    }

    render() {
        let { comment } = this.state
        return (
            <div key={comment.id}>
                <p>{comment.body}</p>
                <span>Comment by: {comment.author} on {comment.timestamp}</span>
                <span>
                    Votes: {comment.voteScore} : 
                    <a href="#upvote" onClick={() => this.handleVoteComment("upVote")}>Upvote</a> | 
                    <a href="#downvote" onClick={() => this.handleVoteComment("downVote")}>Downvote</a>
                </span>
                <span>
                    <a href="#edit" onClick={this.handleEditComment}>Edit</a>
                    <a href="#delete" onClick={this.handleDeleteComment}>Delete</a>
                </span>
            </div>
        )
    }
}

export default Comment