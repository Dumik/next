
import React from 'react';

import { NavLiFriend, Ava, Name, NavLinkFriend } from './FriendBox.styled';




const FriendBox = (props) => {



  return (



    <NavLiFriend>
      <NavLinkFriend href="#">
        <Ava src={props.ava} alt='ava' />
        <Name> {props.name}</Name>
      </NavLinkFriend>
    </NavLiFriend>

  );
}

export default FriendBox;  