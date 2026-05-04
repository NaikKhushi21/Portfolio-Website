import React from 'react';

type LetterDisplayProps = {
  word: string;
  className?: string;
};

function getRandomSpeed() {
  return 0.8 + Math.random() * 0.7;
}

const LetterDisplay: React.FC<LetterDisplayProps> = ({ word, className }) => {
  return (
    <>
      {word.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={`letter ${className ?? ''}`.trim()}
          data-speed={getRandomSpeed()}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
};

export default LetterDisplay;
