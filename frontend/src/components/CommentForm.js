import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'

class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            author: ''
        }
    }

    handleInputChange = (e) => {
        const target = e.target
        const value = target.value 
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        
        const uuidv4 = require('uuid/v4');

        let comment = {
            id: uuidv4(),
            timestamp: Date.now(),
            body: this.state.body,
            author: this.state.author,
            parentId: this.props.postId,
        }

        ReadableAPI.addComment(comment)
            .then(data => {
                console.log(data)
                this.setState({
                    body: '',
                    author: ''
                })
            })
    }

    render() {
        return (
            <form id="addCommentForm" name="addCommentForm" action='POST' onSubmit={this.handleFormSubmit}>

                <label htmlFor="author">Author</label>
                <input type="text" name="author" value={this.state.author} onChange={this.handleInputChange} />

                <label htmlFor="body">Body</label>
                <input type="text" name="body" value={this.state.body} onChange={this.handleInputChange} />

                <input type="submit" name="submit" />
            </form>
        )
    }
}

export default CommentForm