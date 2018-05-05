import React, { Component } from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props)

        const uuidv4 = require('uuid/v4');

        this.state = {
            id: uuidv4(),
            timestamp: Date.now(),
            body: '',
            author: '',
            parentId: this.props.postId
        }
    }

    componentDidMount() {
        const { comment } = this.props

        if( comment !== undefined ) {
            this.setState(comment)
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
        
        let comment = {
            id: this.state.id,
            timestamp: this.state.timestamp,
            body: this.state.body,
            author: this.state.author,
            parentId: this.state.parentId,
        }

        if(this.props.isEditing){
            this.props.editComment(comment)
        }else {
            this.props.addComment(comment)
        }
        this.resetForm()
    }

    resetForm = () => {
        this.setState({
            body: '',
            author: ''
        })
    }

    render() {
        return (
            <form id="addCommentForm" name="addCommentForm" action='POST' onSubmit={this.handleFormSubmit}>

                { !this.props.isEditing && <div>
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" value={this.state.author} onChange={this.handleInputChange} />
                    </div>
                }

                <label htmlFor="body">Body</label>
                <input type="text" name="body" value={this.state.body} onChange={this.handleInputChange} />

                <input type="submit" name="submit" />
            </form>
        )
    }
}

export default CommentForm