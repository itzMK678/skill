'use client'
import { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);  // Ref to store cursor div
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    let animationFrameId;

    const updateCursorPosition = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Using requestAnimationFrame to smooth out the mousemove events
    const smoothCursorMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 14}px`;
        cursorRef.current.style.top = `${e.clientY - 14}px`;
      }
      animationFrameId = requestAnimationFrame(smoothCursorMove);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="absolute w-8 h-8 bg-white rounded-full pointer-events-none z-50 transition-transform transform mix-blend-difference"
      style={{
        left: cursorPosition.x - 14,
        top: cursorPosition.y - 14,
        transition: 'transform 0.1s ease',  // Smooth transition for animation
      }}
    />
  );
};

export default CustomCursor;
