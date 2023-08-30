import React, { useState } from 'react';

const HoverModal = ({ word, content }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ textDecoration: isHovering ? 'underline' : 'none' }}
    >
      {word}
      {isHovering && (
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: '0',
            background: '#f5f5f5',
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          {content}
        </div>
      )}
    </span>
  );
};

export default HoverModal;
