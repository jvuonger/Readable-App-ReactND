import { connect } from 'react-redux'
import React, { Component } from 'react'
import { NavLink, Route, withRouter } from 'react-router-dom'
import PostListContainer from '../containers/PostListContainer'
import * as ReadableAPI from '../utils/ReadableAPI'
import CreateEditPostContainer from '../containers/CreateEditPostContainer'
import PostDetailContainer from '../containers/PostDetailContainer'
import Modal from 'react-modal'
import { fetchCategories } from '../actions'


class App extends Component {

    state = {
        commentModalOpen: false
    }

    componentDidMount() {
        this.props.fetchCategories()
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
        const { categories } = this.props.categories
        const { commentModalOpen } = this.state

        return (
            <div className="App">
                <div id="layout">
                    <div id="menu">
                        <div className="pure-menu">
                            <a className="pure-menu-heading" href="/">Readable</a>
                            <ul className="pure-menu-list">
                                <li className="pure-menu-item"><NavLink to="/" className="pure-menu-link">Home</NavLink></li>
                                { categories.map((category) => (
                                    <li key={category.name} className="pure-menu-item">
                                        <NavLink key={category.name} className="pure-menu-link" to={{pathname: `/${category.path}`}}> { category.path } </NavLink>
                                    </li>
                                ))}
                                <li className="pure-menu-item"><NavLink to="/create" className="pure-menu-link">Create a Post</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div id="main">
                        <button onClick={this.createCommentModal}>Create Comment</button>
                        <Route exact path="/" render={() =>
                            <PostListContainer filterCategory="all" />
                        } />
                        { categories.map((category) => (
                            <Route key={category.name} exact path={'/' + category.path} render={() => 
                                <PostListContainer key={category.name} filterCategory={category.name} />
                            } />
                        ))}
                        <Route path="/post/:postId" component={PostDetailContainer} />
                        <Route path="/create/:postId?" render={() =>
                            <CreateEditPostContainer />
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

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories
})

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
}) 

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))