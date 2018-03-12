import React, { Component } from 'react';
import { format } from 'date-fns'

class Post extends Component {

    render() {
        const {id, author, title, body, category, commentCount, createdAt, voteScore} = this.props
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
                <span>{id}</span>
            </div>
        )
    }
}

export default Post