
import React from 'react';
import Content from './Profile.styled';
import MyPost from './MyPost/MyPost';


const Profile = () => {
  return (
    <Content>
      <div>
        <img src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"></img>
      </div>
      <div>
        <img src="https://html5css.ru/w3css/img_avatar3.png"></img>
      </div>
      <MyPost />
    </Content>
  );
}

export default Profile;