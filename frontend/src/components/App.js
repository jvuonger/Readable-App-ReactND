import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Posts from './Posts'
import * as ReadableAPI from '../utils/ReadableAPI'
import CreateEditPost from './CreateEditPost'

class App extends Component {

    state = {
        categories: []
    }

    componentDidMount() {
        ReadableAPI.getAllCategories().then((categories) =>
            this.setState({categories})
        )
    }

    render() {
        const { categories } = this.state

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
                            <Posts filterCategory="all" />
                        } />
                        { categories.map((category) => (
                            <Route exact path={'/' + category.path} render={() => 
                                <Posts key={category.name} filterCategory={category.name} />
                            } />
                        ))}
                        <Route path="/create/:post_id?" render={() =>
                            <CreateEditPost categories={categories} />
                        } />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
