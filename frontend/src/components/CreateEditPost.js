import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'

class CreateEditPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            author: '',
            category: ''
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

        let post = {
            id: uuidv4(),
            timestamp: Date.now(),
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
            category: this.state.category,
        }

        ReadableAPI.addPost(post)
            .then(data => {
                console.log(data)
                this.setState({
                    title: '',
                    body: '',
                    author: '',
                    category: ''
                })
            })
    }

    render() {
        const {categories} = this.props
        return (
            <div>
                <h2 className="content-subhead">Create a new Post</h2>
                <form id="postForm" name="postForm" action='POST' onSubmit={this.handleFormSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={this.state.title}  onChange={this.handleInputChange} />
                    <br/>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" value={this.state.author}  onChange={this.handleInputChange} />
                    <br/>
                    <label htmlFor="body">Body:</label>
                    <textarea id="body" name="body" value={this.state.body}  onChange={this.handleInputChange} />
                    <br/>
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" value={this.state.category} onChange={this.handleInputChange} >
                        <optgroup label="Select a Category">
                        { categories.map((category) => (
                            <option key={category.name} value={category.name}>{category.name}</option>
                        )) }
                        </optgroup>
                    </select>
                    <br/>
                    <input type="submit" id="submit" name="submit" />
                </form>
            </div>
        )
    }
}

export default CreateEditPost