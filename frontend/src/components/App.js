import React, { Component } from 'react';
import Post from './Post'
import * as ReadableAPI from '../utils/ReadableAPI'

class CommentForm extends Component {
    handleFormSubmit = (e) => {
        e.preventDefault()

        let comment = {
            id: e.target.id.value,
            timestamp: e.target.timestamp.value,
            body: e.target.body.value,
            author: e.target.author.value,
            parentId: e.target.parentId.value,
        }

        console.log(comment)
        ReadableAPI.addComment(comment)
    }

    render() {
        const uuidv4 = require('uuid/v4');
        return (
            <form id="addCommentForm" name="addCommentForm" action='POST' onSubmit={this.handleFormSubmit}>
                <label htmlFor="id">ID</label>
                <input type="text" name="id" value={uuidv4()} readOnly />

                <label htmlFor="timestamp">Timestamp</label>
                <input type="text" name="timestamp" value={Date.now()} readOnly />

                <label htmlFor="body">Body</label>
                <input type="text" name="body" />

                <label htmlFor="author">Author</label>
                <input type="text" name="author" />

                <label htmlFor="parentId">Parent ID</label>
                <input type="text" name="parentId" />

                <input type="submit" name="submit" />
            </form>
        )
    }
}

class App extends Component {
    state = {
        categories: [],
        posts: []
    }

    componentDidMount() {
        ReadableAPI.getAllCategories().then((categories) =>
            this.setState({categories})
        )

        ReadableAPI.getAllPosts().then((posts) => 
            this.setState({posts})
        )
    }

    render() {
        const { categories, posts } = this.state

        return (
            <div className="App">
                <div id="layout">

                    <div id="menu">
                        <div className="pure-menu">
                            <a className="pure-menu-heading" href="#">Readable</a>
                            <ul className="pure-menu-list">
                                { categories.map((category) => (
                                    <li key={category.name} className="pure-menu-item"><a href={category.path} className="pure-menu-link">{ category.name }</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div id="main">
                        <div className="header">
                            <h1>Readable</h1>
                        </div>

                        
                        <CommentForm />
                        { posts.map((post) => (
                            <Post 
                                key={post.id}
                                id={post.id}
                                author={post.author}
                                title={post.title}
                                body={post.body}
                                category={post.category}
                                commentCount={post.commentCount}
                                createdAt={post.timestamp}
                                voteScore={post.voteScore}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
