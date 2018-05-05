import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import PostListContainer from '../containers/PostListContainer'
import CreateEditPostContainer from '../containers/CreateEditPostContainer'
import PostDetailContainer from '../containers/PostDetailContainer'
import { POST_ACTION } from '../actions'


class App extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        const { categories } = this.props.categories

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
                                <li className="pure-menu-item"><NavLink to="/create/post" className="pure-menu-link">Create a Post</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div id="main">
                        <Route exact path="/" render={() =>
                            <PostListContainer filterCategory="all" />
                        } />
                        { categories.map((category) => (
                            <Route key={category.name} exact path={'/' + category.path} render={() => 
                                <PostListContainer key={category.name} filterCategory={category.name} />
                            } />
                        ))}
                        <Route exact path="/post/:postId" component={PostDetailContainer} />
                        <Route exact path="/post/:postId/edit" render={(props) => <PostDetailContainer {...props} action={POST_ACTION.EDIT_POST} />} />
                        <Route exact path="/create/post" render={(props) => <CreateEditPostContainer {...props} isEditing={false} />} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App