import React, { useState, useEffect } from 'react';

function TypewriterText({ text, speed, style }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, text, speed ]);

  return <span style={style}>{displayedText}</span>;
  
}

export default TypewriterText;
