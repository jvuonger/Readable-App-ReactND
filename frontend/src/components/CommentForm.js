import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'

class CommentForm extends Component {
    constructor(props) {
        super(props)

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
            id: uuidv4(),
            body: '',
            author: ''
        })
    }

    render() {
        return (
            <form className="pure-form pure-form-stacked" id="addCommentForm" name="addCommentForm" action='POST' onSubmit={this.handleFormSubmit}>

                { !this.props.isEditing && <div>
                    <label htmlFor="author">Author</label>
                    <input className="pure-input-2-3" type="text" name="author" value={this.state.author} onChange={this.handleInputChange} />
                    </div>
                }

                <label htmlFor="body">Body</label>
                <input className="pure-input-2-3" type="text" name="body" value={this.state.body} onChange={this.handleInputChange} />

                <input className="pure-button pure-button-primary" type="submit" name="submit" />
            </form>
        )
    }
}

export default CommentForm