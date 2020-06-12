import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  grid-area: n;
  background-color: white;
  box-shadow: 0px 0px 1px black;
  margin-right: 10px;
`;

const NavLi = styled.li`
  display: block;
  padding: 3px 0;
  font-size: 24px;
`;

const LinkElem = styled(NavLink)`
  color: #333;
  text-decoration: none;

  &.active {
    color: firebrick;
    text-decoration: none;
  }

  &:hover {
    color: #666;
    text-decoration: none;
  }
`;

export { Nav, NavLi, LinkElem };
