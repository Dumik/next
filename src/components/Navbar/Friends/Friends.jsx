
import React from 'react';

import { Friends, Heading, BoxFriend } from './NavBarFriends.styled';
import FriendBox from './FriendBox/FriendBox';




const BoxFriends = (props) => {
      
    
    let friends = 
    props.friends.map(friend => <FriendBox name={friend.name} ava={friend.ava} />)
    return (
        <Friends>
            <Heading>Friends</Heading>
            <BoxFriend>
                {friends}
                

            </BoxFriend>
        </Friends>

    );
}

export default BoxFriends;  