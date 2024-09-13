import React, { useEffect, useRef } from 'react';
import './Display.css';

const Display = ({ input, result, showResult }) => {
  const displayRef = useRef(null);

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.scrollLeft = displayRef.current.scrollWidth; // Scroll to the rightmost end
    }
  }, [input, result, showResult]);

  return (
    <div className="display" ref={displayRef}>
      <div className="text">{showResult ? result : input}</div> {/* Display result or input */}
    </div>
  );
};

export default Display;
