import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Post from './Post'
import * as ReadableAPI from '../utils/ReadableAPI'
import CreateEditPost from './CreateEditPost'

const SortDirection = {
    ASCENDING : 'asc',
    DESCENDING : 'desc'
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

    togglePostVoteSort = (direction) => {
        let posts = []
        // Ascending = display lowest votes first ( smaller votes first )
        // Descending = display most votes first ( bigger votes first )
        if(direction === SortDirection.ASCENDING) {
            posts = this.state.posts.slice(0).sort((a,b) => a.voteScore < b.voteScore)
        } else {
            posts = this.state.posts.slice(0).sort((a,b) => a.voteScore > b.voteScore)
        }
        this.setState({posts})
    }

    togglePostDateSort = (direction) => {
        let posts = []
        // Ascending = display older posts first ( smaller timestamps first )
        // Descending = display new posts first ( bigger timestamps first )
        if(direction === SortDirection.ASCENDING) {
            posts = this.state.posts.slice(0).sort((a,b) => a.timestamp < b.timestamp)
        } else {
            posts = this.state.posts.slice(0).sort((a,b) => a.timestamp > b.timestamp)
        }
        this.setState({posts})
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
                                <li className="pure-menu-item"><a href="/" className="pure-menu-link">Home</a></li>
                                { categories.map((category) => (
                                    <li key={category.name} className="pure-menu-item"><a href={category.path} className="pure-menu-link">{ category.name }</a></li>
                                ))}
                                <li className="pure-menu-item"><a href="/create" className="pure-menu-link">Create a Post</a></li>
                            </ul>
                        </div>
                    </div>

                    <div id="main">
                        <Route exact path="/" render={() =>
                            <div>
                                <div className="header">
                                    <h1>Readable Test</h1>
                                </div>

                                <div id="sort-bar">
                                    Order Posts By: 
                                    <button onClick={() => this.togglePostVoteSort(SortDirection.ASCENDING)}>Most Votes</button>
                                    <button onClick={() => this.togglePostVoteSort(SortDirection.DESCENDING)}>Least Votes</button> | 
                                    <button onClick={() => this.togglePostDateSort(SortDirection.ASCENDING)}>Most Recent</button>
                                    <button onClick={() => this.togglePostDateSort(SortDirection.DESCENDING)}>Oldest</button>
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
                        } />
                        <Route exact path="/create" render={() =>
                            <CreateEditPost categories={categories} />
                        } />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
