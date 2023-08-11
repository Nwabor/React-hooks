import React, { useRef } from 'react';

const ImageToggleOnMouse = ({ primaryImg, secondaryImg }) => {
  const ImgaeRef = useRef();

  return (
    <img
      onMouseMove={() => {
        ImgaeRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        ImgaeRef.current.src = primaryImg;
      }}
      src={primaryImg}
      alt=''
      ref={ImgaeRef}
    />
  );
};

export default ImageToggleOnMouse;
