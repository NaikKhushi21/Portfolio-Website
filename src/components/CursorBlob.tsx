import React, { useEffect, useRef } from 'react';

const CursorBlob: React.FC = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const pointerRef = useRef({ x: -120, y: -120 });

  useEffect(() => {
    const updateBlob = () => {
      frameRef.current = 0;
      if (!blobRef.current) {
        return;
      }

      blobRef.current.style.transform = `translate3d(${pointerRef.current.x - 18}px, ${pointerRef.current.y - 18}px, 0)`;
    };

    const handleMove = (event: MouseEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      if (frameRef.current === 0) {
        frameRef.current = window.requestAnimationFrame(updateBlob);
      }
    };

    const handleDown = () => {
      blobRef.current?.classList.add('active');
    };
    const handleUp = () => {
      blobRef.current?.classList.remove('active');
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="cursor-blob"
      aria-hidden="true"
    />
  );
};

export default CursorBlob;
