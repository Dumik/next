 
import styled from 'styled-components';


const MainHeader = styled.header`
    grid-area: h;
    background-color: white;
    border-bottom: 1px solid black;
    
    margin-bottom: 10px ;
    margin-top: 10px;
    position: relative;
  `;


const MainHeaderLogo = styled.img`
   height: 100%;
   width: auto;
  
`;


export {MainHeader, MainHeaderLogo};