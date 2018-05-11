import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import PostListContainer from '../containers/PostListContainer'
import CreateEditPostContainer from '../containers/CreateEditPostContainer'
import PostDetailContainer from '../containers/PostDetailContainer'
import { POST_ACTION } from '../actions/types'


class App extends Component {

    componentWillMount() {
        this.props.fetchCategories()
    }

    render() {
        const { categories } = this.props.categories

        return (
            <div className="App">
                <div id="layout" className="pure-g">
                    <div id="menu" className="sidebar pure-u-1 pure-u-md-1-4">
                        <div className="pure-menu">
                            <a className="pure-menu-heading" href="/">Readable</a>
                            <ul className="pure-menu-list">
                                <li className="pure-menu-item"><NavLink to="/" className="pure-menu-link">Home</NavLink></li>
                                { categories.map((category) => (
                                    <li key={category.name} className="pure-menu-item">
                                        <NavLink key={category.name} className="pure-menu-link" to={{pathname: `/${category.path}`}}> { category.path } </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div id="main" className="content pure-u-1 pure-u-md-3-4">
                        <Switch>
                            <Route exact path="/" render={() =>
                                <PostListContainer filterCategory="all" />
                            } />
                            { categories.map((category) => (
                                <Route key={category.name} exact path={'/' + category.path} render={() => 
                                    <PostListContainer key={category.name} filterCategory={category.name} />
                                } />
                            ))}
                            <Route exact path="/:category/:postId" component={PostDetailContainer} />
                            <Route exact path="/:category/:postId/edit" render={(props) => <PostDetailContainer {...props} action={POST_ACTION.EDIT_POST} />} />
                            <Route exact path="/create/post" render={(props) => <CreateEditPostContainer {...props} isEditing={false} />} />
                            <Route exact path="/404" component={NoMatch} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export const NoMatch = () => (
    <div>
        <h1 className="title">404</h1>
        <h3>We're sorry, but this page does not exist.</h3>
    </div>
)

export default App