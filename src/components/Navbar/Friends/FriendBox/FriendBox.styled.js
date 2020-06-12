import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavLiFriend = styled.li`
  display: inline-block;
`;

const Ava = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const NavLinkFriend = styled.a`
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

const Name = styled.p`
  text-align: center;
`;

export { NavLiFriend, Ava, Name, NavLinkFriend };
