
import React from 'react';
import { Box, Avatar } from './Post.styled';



const Post = (props) => {
  return (


    <Box>

      <Avatar src="https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg" alt=" ava" />
      {props.user}
      <br />
              {props.massege}
      <div>
        <span>like </span>{props.like}
      </div>
    </Box>

  );
}

export default Post;