import React, { Component } from 'react';
import Post from './Post'
import * as ReadableAPI from '../utils/ReadableAPI'

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
                                { categories.map((category) => (
                                    <li className="pure-menu-item"><a href={category.path} className="pure-menu-link">{ category.name }</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div id="main">
                        <div className="header">
                            <h1>Readable</h1>
                        </div>

                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
