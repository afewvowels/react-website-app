import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <header>
        <div id='logo-and-title'>
          <img src=''></img>
          <h1>Title Goes Here</h1>
        </div>
        <nav>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Nav;
