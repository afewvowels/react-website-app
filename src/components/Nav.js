import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Nav.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
  render() {
    return (
      <header>
        <div id='logo-and-title'>
          <FontAwesomeIcon icon={faCoffee} className='logo' />
          <h1>Good Morning Coffee</h1>
        </div>
        <nav>
          <ul>
            <li><a><span>Home</span></a></li>
            <li><a><span>Locations</span></a></li>
            <li><a><span>About</span></a></li>
            <li><a><span>Merch</span></a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Nav;
