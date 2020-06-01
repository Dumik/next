
import React from 'react';
import Content from './MyPost.styled';
import Post from './Post/Post';


const MyPost = () => {
  return (

    <div>

      <div>
        <textarea> textst post</textarea>
        <button>Add post</button>
            new post
      </div>
      <Post like='7' user=' Oleg '/>
      <Post like=" 12"/>
    </div>
  );
}

export default MyPost;