import React from 'react';
import ImageToggleOnMouse from '../src/ImageToggleOnMouse';

const ImageChange = () => {
  return (
    <div>
      <ImageToggleOnMouse
        primaryImg='/static/speakers/bw/Speaker-1124.jpg'
        secondaryImg='/static/speakers/Speaker-1124.jpg'
        alt='Black'
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouse
        primaryImg='/static/speakers/bw/Speaker-1269.jpg'
        secondaryImg='/static/speakers/Speaker-1269.jpg'
        alt='Black'
      />
    </div>
  );
};

export default ImageChange;
