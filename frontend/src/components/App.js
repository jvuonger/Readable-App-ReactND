import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import PostList from './PostList'
import * as ReadableAPI from '../utils/ReadableAPI'
import CreateEditPost from './CreateEditPost'
import PostDetail from './PostDetail'
import Modal from 'react-modal'

const initialState = {
    posts: [
        {
            "id": "6ni6ok3ym7mf1p33lnez",
            "timestamp": 1468479767190,
            "title": "Learn Redux in 10 minutes!",
            "body": "Just kidding. It takes more than 10 minutes to learn technology.",
            "author": "thingone",
            "category": "redux",
            "voteScore": -5,
            "deleted": false,
            "commentCount": 0
        }
    ],
    orderScheme: "",
    currentCategory: "",
    currentPost: "Key"
}

class App extends Component {

    state = {
        categories: [],
        commentModalOpen: false
    }

    componentDidMount() {
        ReadableAPI.getAllCategories().then((categories) =>
            this.setState({categories})
        )
    }

    createCommentModal = () => {
        this.setState({commentModalOpen: true})
    }

    editCommentModal = () => {
        this.setState({commentModalOpen: true})
    }

    closeCommentModal = () => {
        this.setState({commentModalOpen: false})
    }

    render() {
        const { categories, commentModalOpen } = this.state

        return (
            <div className="App">
                <div id="layout">
                    <div id="menu">
                        <div className="pure-menu">
                            <a className="pure-menu-heading" href="/">Readable</a>
                            <ul className="pure-menu-list">
                                <li className="pure-menu-item"><a href="/" className="pure-menu-link">Home</a></li>
                                { categories.map((category) => (
                                    <li key={category.name} className="pure-menu-item"><a href={'/' + category.path} className="pure-menu-link">{ category.name }</a></li>
                                ))}
                                <li className="pure-menu-item"><a href="/create" className="pure-menu-link">Create a Post</a></li>
                            </ul>
                        </div>
                    </div>

                    <div id="main">
                        <button onClick={this.createCommentModal}>Create Comment</button>
                        <Route exact path="/" render={() =>
                            <PostList filterCategory="all" />
                        } />
                        { categories.map((category) => (
                            <Route key={category.name} exact path={'/' + category.path} render={() => 
                                <PostList key={category.name} filterCategory={category.name} />
                            } />
                        ))}
                        <Route path="/post/:postId" component={PostDetail} />
                        <Route path="/create/:postId?" render={() =>
                            <CreateEditPost categories={categories} />
                        } />
                    </div>
                </div>

                <Modal
                    className='modal'
                    overlayClassName='overlay'
                    isOpen={commentModalOpen}
                    onRequestClose={this.closeCommentModal}
                    contentLabel='Modal'
                    >
                    Comment Modal
                    <button onClick={this.closeCommentModal}>Close Modal</button>
                </Modal>
            </div>
        );
    }
}

export default App;
