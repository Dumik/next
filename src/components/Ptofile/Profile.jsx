
import React from 'react';
import Content from './Profile.styled';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

  
  return (
    <Content>
      <ProfileInfo />
      <MyPost posts={props.posts}/>
    </Content>
  );
}

export default Profile;