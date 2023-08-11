import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import React, { useRef, useState, useEffect } from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const ImageRef = useRef();

  const [isLoading, setIsLoading] = useState(true);

  const isInView = () => {
    const rect = ImageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return (
    <img
      src={
        isLoading
          ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
          : inView
          ? secondaryImg
          : primaryImg
      }
      alt=''
      ref={ImageRef}
    />
  );
};

export default ImageToggleOnScroll;
