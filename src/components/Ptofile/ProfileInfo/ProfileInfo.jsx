
import React from 'react';
import { Box, Wallpaper, Avatar } from './ProfileInfo.styled';


const ProfileInfo = (props) => {
  return (
    <Box>
      <div>
        <Wallpaper src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"></Wallpaper>
      </div>
      <div>
        <Avatar src="https://html5css.ru/w3css/img_avatar3.png"></Avatar>
      </div>
    </Box>
  );
}

export default ProfileInfo;