import React, { useEffect, useState } from 'react';

const Syntax = () => {
  const [checkBox, setCheckBok] = useState(false);
  useEffect(() => {
    console.log('in Effect');
    return () => {
      console.log('in effect clean');
    };
  }, [checkBox
  ]);

  return <div></div>;
};

export default Syntax;
