
import React from 'react';
import Box from './MyPost.styled';
import Post from './Post/Post';

let postData = [
  { id: '0', massege: 'MY FIRST POST!!!!!!!!!!!!', like: '3' },
  { id: '1', massege: 'askldmkalsmdklasmdkl', like: '6' },
  { id: '2', massege: 'dumik.alive@gmail.com', like: '4' },
];

let postElements = postData
    .map( post =>  <Post like={post.like} massege={post.massege} /> );


const MyPost = () => {
  return (

    <Box>

      <div>
        <textarea> textst post</textarea>
        <button>Add post</button>
            new post
      </div>
      {postElements}
     
    </Box>
  );
}

export default MyPost;