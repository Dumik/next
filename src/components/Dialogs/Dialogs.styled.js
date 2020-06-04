 
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Dialog = styled.div`
    height: 100%;
    color: black;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 4fr 10fr;
    padding: 20px;
    background-color: firebrick;
    border-left: 2px solid black;
  `;

const LinkElem = styled(NavLink) `
  color: white;
  text-decoration: none;

  &.active {
    color: gold;
    text-decoration: none;
  }

  &:hover {
    color: #ddd;
    text-decoration: none;
  }

`;






export {Dialog, LinkElem};