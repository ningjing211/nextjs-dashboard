'use client';

import { useEffect, useRef, useState } from 'react';
import BigLeap from '@/BigLeap/BigLeap';

export default function BigLeapWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    try {
      if (containerRef.current) {
        console.log('Initializing BigLeap...');
        const bigLeap = new BigLeap(containerRef.current, {
          backgroundColor: 'black',
          textColor: 'white',
          fontSize: '28px',
          animationDuration: 2,
          animationDelay: 1,
          onComplete: () => {
            console.log('BigLeap animation completed');
            setTimeout(() => {
              setIsVisible(false);
            }, 500);
          }
        });

        console.log('Playing BigLeap animation...');
        bigLeap.play();

        return () => {
          console.log('Cleaning up BigLeap...');
          bigLeap.destroy();
        };
      } else {
        console.error('Container ref is null');
      }
    } catch (error) {
      console.error('Error in BigLeapWrapper:', error);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        pointerEvents: 'none'
      }} 
    />
  );
} 