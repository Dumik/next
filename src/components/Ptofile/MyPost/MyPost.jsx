
import React from 'react';
import Box from './MyPost.styled';
import Post from './Post/Post';





const MyPost = (props) => {
 
  let postElements = 
  props.posts.map(post => <Post like={post.like} massege={post.massege} />);
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