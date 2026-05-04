import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LetterDisplay from './LetterDisplay';
import './LetterCollision.css';

gsap.registerPlugin(ScrollTrigger);

// const lines = ['Creativity', 'is my craft'];
// const subLine = 'abstract thinking is my passion';
const lines = ['Creative', 'engineer'];
const subLine = 'turning ideas into real products';

function getRandomRotation() {
  return Math.random() * 60 - 30;
}

const LetterCollision: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) {
      return;
    }

    const context = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>('.letter');

      letters.forEach((letter) => {
        const speed = parseFloat(letter.dataset.speed || '1');

        gsap.to(letter, {
          y: (1 - speed) * ScrollTrigger.maxScroll(window),
          rotation: getRandomRotation(),
          ease: 'power2.out',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight,
            scrub: 0.5,
            invalidateOnRefresh: true
          }
        });
      });
    }, rootRef);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="letter-collision">
      <div className="letter-line-group">
        <div className="letter-line">
          <LetterDisplay word={lines[0]} className="letter-main" />
        </div>
        <div className="letter-line">
          <LetterDisplay word={lines[1]} className="letter-main" />
        </div>
      </div>
      <div className="letter-line letter-subline">
        <LetterDisplay word={subLine} className="letter-sub" />
      </div>
    </div>
  );
};

export default LetterCollision;
