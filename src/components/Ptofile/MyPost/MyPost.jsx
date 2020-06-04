
import React from 'react';
import Box from './MyPost.styled';
import Post from './Post/Post';

let postData = [
  { id: '0', massege: 'MY FIRST POST!!!!!!!!!!!!', like: '3' },
  { id: '1', massege: 'askldmkalsmdklasmdkl', like: '6' },
  { id: '2', massege: 'askldmkalsmdklasmdkl', like: '4' },
];


const MyPost = () => {
  return (

    <Box>

      <div>
        <textarea> textst post</textarea>
        <button>Add post</button>
            new post
      </div>
      <Post like={postData[0].like} massege={postData[0].massege} user=' Oleg ' />
      <Post like={postData[1].like} massege={postData[1].massege} user=' Oleg ' />
    </Box>
  );
}

export default MyPost;