import React, { Component } from 'react';
import { POST_ACTION } from '../actions/types'
import uuidv4 from 'uuid/v4'

class CreateEditPost extends Component {
    constructor(props) {
        super(props)

        const { post, isEditing } = props;

        this.state = {
            id: post ? post.id : uuidv4(),
            title: post ? post.title : "" ,
            body: post ? post.body : "",
            author: post ? post.author : "",
            category: post ? post.category : "",
            post_action : isEditing ? POST_ACTION.EDIT_POST : POST_ACTION.CREATE_POST
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

        if(post.title === '' || post.body === '' || post.author === '' || post.category === '') {
            this.setState({
                errors: "Please Fill out All Fields"
            })
            return
        }

        if (this.state.post_action === POST_ACTION.CREATE_POST) {
            this.props.sendAddPost(post)
        } else {
            this.props.sendEditPost(post)
        }

        this.props.history.push(`/post/${post.id}`)
    }

    render() {
        const {errors} = this.state
        const {categories} = this.props.categories
        const {isEditing} = this.props

        return (
            <div>
                
                { !isEditing && <h2 className="content-subhead">Create a New Post</h2> }
                { isEditing && <h2 className="content-subhead">Editing Post</h2> }
                { errors && <h3 class="errors">{errors}</h3>}
                <form className="pure-form pure-form-stacked" id="postForm" name="postForm" action='POST' onSubmit={this.handleFormSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input className="pure-input-1" type="text" id="title" name="title" value={this.state.title}  onChange={this.handleInputChange} />
                    <br/>
                    { 
                        !isEditing && 
                        <div>
                            <label htmlFor="author">Author:</label>
                            <input className="pure-input-1" type="text" id="author" name="author" value={this.state.author}  onChange={this.handleInputChange} />
                        </div>
                    }
                    <label htmlFor="body">Body:</label>
                    <textarea className="pure-input-1" id="body" name="body" value={this.state.body}  onChange={this.handleInputChange} rows="5"/>
                    <br/>
                    { 
                        !isEditing && 
                        <div>
                            <label htmlFor="category">Category:</label>
                            <select className="pure-input-1" id="category" name="category" value={this.state.category} onChange={this.handleInputChange} >
                                <option disabled value="">Select a Category</option>
                                { categories.map((category) => (
                                    <option key={category.name} value={category.name}>{category.name}</option>
                                )) }
                            </select>
                            <br/>
                        </div>
                    }
                    <input className="pure-button pure-button-primary" type="submit" id="submit" name="submit" />
                </form>
            </div>
        )
    }
}

export default CreateEditPost