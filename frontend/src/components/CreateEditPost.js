import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'
import { POST_ACTION } from '../actions'

class CreateEditPost extends Component {
    constructor(props) {
        super(props)

        const uuidv4 = require('uuid/v4');

        const { post } = props;

        this.state = {
            id: uuidv4(),
            title: post && post.title,
            body: post && post.body,
            author: post && post.author,
            category: post && post.category,
            post_action : POST_ACTION.CREATE_POST
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if( nextProps.post === undefined ) return;

        const {id, title, body, author, category} = nextProps.post

        if( title !== undefined && body !== undefined && author !== undefined && category !== undefined) {
            this.setState({
                id,
                title,
                body,
                author,
                category,
                post_action : POST_ACTION.EDIT_POST
            })
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

        let post = {
            id: this.state.id,
            timestamp: Date.now(),
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
            category: this.state.category,
        }

        if (this.state.post_action === POST_ACTION.CREATE_POST) {
            this.props.sendAddPost(post)
        } else {
            this.props.sendEditPost(post)
        }

        this.props.history.push(`/post/${post.id}`)
    }

    render() {
        const {categories} = this.props.categories
        const {isEditing} = this.props
        return (
            <div>
                <h2 className="content-subhead">Create a new Post</h2>
                <form id="postForm" name="postForm" action='POST' onSubmit={this.handleFormSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={this.state.title}  onChange={this.handleInputChange} />
                    <br/>
                    { 
                        !isEditing && 
                        <div>
                            <label htmlFor="author">Author:</label>
                            <input type="text" id="author" name="author" value={this.state.author}  onChange={this.handleInputChange} />
                        </div>
                    }
                    <label htmlFor="body">Body:</label>
                    <textarea id="body" name="body" value={this.state.body}  onChange={this.handleInputChange} />
                    <br/>
                    { 
                        !isEditing && 
                        <div>
                            <label htmlFor="category">Category:</label>
                            <select id="category" name="category" value={this.state.category} onChange={this.handleInputChange} >
                                <optgroup label="Select a Category">
                                { categories.map((category) => (
                                    <option key={category.name} value={category.name}>{category.name}</option>
                                )) }
                                </optgroup>
                            </select>
                            <br/>
                        </div>
                    }
                    <input type="submit" id="submit" name="submit" />
                </form>
            </div>
        )
    }
}

export default CreateEditPost