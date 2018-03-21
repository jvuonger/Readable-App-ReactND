import React, { Component } from 'react';
import { format } from 'date-fns'
import CommentForm from './CommentForm'
import * as ReadableAPI from '../utils/ReadableAPI'

class PostDetail extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        const { postId } = this.props.match.params
        ReadableAPI.postDetail(postId).then((post) => (
            this.setState({post})
        ))
    }

    render() {
        const {id, author, title, body, category, commentCount, createdAt, voteScore} = this.state.post
        let formattedDateTime = format(new Date(createdAt), 'MM/DD/YYYY')

        return (

            <div className="content">
                <h2 className="content-subhead">{title}</h2>
                <p className="post-meta">
                    Posted on {formattedDateTime} by <a href="#" className="post-author">{author}</a> under <a className="post-category" href="#">{category}</a> 
                </p>
                <p>{body}</p>
                <p>
                    {voteScore} Votes ( Upvote ) | ( Downvote )
                </p>
                <span>Comments: {commentCount}</span>
                <hr />
                <CommentForm postId={id} />
            </div>
        )
    }
}

export default PostDetail