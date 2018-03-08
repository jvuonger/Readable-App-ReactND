import React, { Component } from 'react';
import Post from './Post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="layout">

            <div id="menu">
                <div className="pure-menu">
                    <a className="pure-menu-heading" href="#">Readable</a>
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Category 1</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Category 2</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Category 3</a></li>
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
