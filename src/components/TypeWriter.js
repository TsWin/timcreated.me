import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <p className='has-text-white'>{displayText}</p>;
};


export default Typewriter;
