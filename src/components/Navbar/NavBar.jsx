
import React from 'react';
import { Nav, NavLi, LinkElem } from './NavBar.styled'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Nav>
      <ul>
        <NavLi><LinkElem to="/profile">Profile</LinkElem></NavLi>
        <NavLi><LinkElem to="/dialogs">Maessages</LinkElem></NavLi>
        <NavLi><LinkElem to="/news">News</LinkElem></NavLi>
        <NavLi><LinkElem to="/music">Music</LinkElem></NavLi>
        <NavLi><LinkElem to="/settings">Settings</LinkElem></NavLi>
      </ul>
    </Nav>
  );
}

export default NavBar;