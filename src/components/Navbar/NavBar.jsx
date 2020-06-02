
import React from 'react';
import {Nav} from './NavBar.styled'


const NavBar = () => {
    return (
    <Nav>
        <ul>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/dialogs">Maessages</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/music">Music</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </Nav>
    );
}

export default NavBar;