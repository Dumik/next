
import React from 'react';
import  Content from'./MyPost.styled';
import Post from './Post/Post';


const MyPost = () => {
    return (

          <div>
          
          <div>
          <textarea> textst post</textarea>
            <button>Add post</button>
            new post
          </div>
          <Post />
          <Post />
        </div>
    );
}

export default MyPost;