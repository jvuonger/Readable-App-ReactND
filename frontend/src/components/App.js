import React, { Component } from 'react';
import Post from './Post'
import * as ReadableAPI from '../utils/ReadableAPI'

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
