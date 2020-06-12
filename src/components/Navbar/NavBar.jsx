import React from 'react';

import { Nav, NavLi, LinkElem } from './NavBar.styled'
import  BoxFriends  from './Friends/Friends';


const NavBar = (props) => {
  return (
    <Nav>
      <ul>
        <NavLi><LinkElem to="/profile">Profile</LinkElem></NavLi>
        <NavLi><LinkElem to="/dialogs">Masseges</LinkElem></NavLi>
        <NavLi><LinkElem to="/news">News</LinkElem></NavLi>
        <NavLi><LinkElem to="/music">Music</LinkElem></NavLi>
        <NavLi><LinkElem to="/settings">Settings</LinkElem></NavLi>
        <BoxFriends friends={props.friends}/>
      </ul>

    </Nav>
  );
}

export default NavBar;