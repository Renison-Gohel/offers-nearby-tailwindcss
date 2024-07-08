import React, { useRef } from 'react';

const ScrollableParagraph = ({ text } : { text: string }) : JSX.Element => {
  const pRef = useRef(null);

  // Function to check if the text length is more than 60 characters
  const isTextLong = text.length > 8;
  console.log(isTextLong);
  

  return (
    <p
      className={`whitespace-nowrap text-slate-100  ${isTextLong ? 'overflow-x-auto' : ''}`}
      style={{ maxWidth: '100%' }}
    >
      {text}
    </p>
  );
};

export default ScrollableParagraph;
