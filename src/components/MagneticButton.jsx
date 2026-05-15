import { useRef, useState, useEffect } from 'react';

export default function MagneticButton({ children, className = '', ...props }) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Reduce movement intensity
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <button
      ref={buttonRef}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${x}px, ${y}px, 0)`,
        transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
      }}
      {...props}
    >
      <span 
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'inherit',
          transform: `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`,
          transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
        }}
      >
        {children}
      </span>

    </button>
  );
}
