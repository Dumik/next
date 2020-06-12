import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Friends = styled.div`
  display: block;
`;

const Heading = styled.h2`
  margin-top: 20px;
`;

const BoxFriend = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
`;

export { Friends, Heading, BoxFriend };
