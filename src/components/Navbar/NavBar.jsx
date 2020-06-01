
import React from 'react';
import {Nav} from './NavBar.styled'


const NavBar = () => {
    return (
    <Nav>
        <ul>
          <li><a href="">Profile</a></li>
          <li><a href="">Maessages</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Music</a></li>
          <li><a href="">Settings</a></li>
        </ul>
      </Nav>
    );
}

export default NavBar;