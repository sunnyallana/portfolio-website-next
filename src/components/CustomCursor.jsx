"use client";


import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursorDot.dataset.cursorDot = '';

    const cursorOutline = document.createElement('div');
    cursorOutline.className = 'cursor-dot-outline';
    cursorOutline.dataset.cursorOutline = '';

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;

      cursorOutline.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
      }, { duration: 500, fill: 'forwards' });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursorDot);
      document.body.removeChild(cursorOutline);
    };
  }, []);

  return null;
};

export default CustomCursor;