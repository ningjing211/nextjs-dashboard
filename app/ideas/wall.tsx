'use client';

import '@/app/ui/ideas/wall.css';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Script from 'next/script';

// 声明 jQuery 全局变量
declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

const imagePaths = [
  '/walls/compressed_01.jpg',
  '/walls/compressed_02.jpg',
  '/walls/compressed_03.jpg',
  '/walls/compressed_04.jpg',
  '/walls/compressed_05.jpg',
  '/walls/compressed_06.jpg',
  '/walls/compressed_07.jpg',
  '/walls/compressed_08.jpg',
  '/walls/compressed_09.jpg',
  '/walls/compressed_10.jpg'
];

export default function Wall() {
  const ringRef = useRef<HTMLDivElement>(null);
  const xPosRef = useRef(0);
  const [isJQueryLoaded, setIsJQueryLoaded] = useState(false);

  useEffect(() => {
    if (!ringRef.current || !isJQueryLoaded || typeof window.$ === 'undefined') return;

    const $ = window.$;
    const timeline = gsap.timeline();
    
    timeline
      .set('.ring', { rotationY: 180, cursor: 'grab' })
      .set('.img', {
        rotateY: (i: number) => i * -36,
        transformOrigin: '50% 50% 500px',
        z: -500,
        backgroundImage: (i: number) => `url(${imagePaths[i % imagePaths.length]})`,
        backgroundPosition: (i: number) => getBgPos(i),
        backfaceVisibility: 'hidden'
      })
      .from('.img', {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo'
      })
      .add(() => {
        $('.img').on('mouseenter', (e: any) => {
          const current = e.currentTarget;
          gsap.to('.img', { opacity: (i: number, t: HTMLElement) => (t === current) ? 1 : 0.5, ease: 'power3' });
        });
        $('.img').on('mouseleave', () => {
          gsap.to('.img', { opacity: 1, ease: 'power2.inOut' });
        });
      }, '-=0.5');

    const dragStart = (e: MouseEvent | TouchEvent) => {
      if (!e) return;
      const clientX = 'touches' in e && e.touches[0] ? e.touches[0].clientX : 
                     'clientX' in e ? e.clientX : 0;
      xPosRef.current = Math.round(clientX);
      gsap.set('.ring', { cursor: 'grabbing' });
      $(window).on('mousemove touchmove', drag);
    };

    const drag = (e: MouseEvent | TouchEvent) => {
      if (!e) return;
      const clientX = 'touches' in e && e.touches[0] ? e.touches[0].clientX : 
                     'clientX' in e ? e.clientX : 0;
      gsap.to('.ring', {
        rotationY: '-=' + ((Math.round(clientX) - xPosRef.current) % 360),
        onUpdate: () => {
          gsap.set('.img', { backgroundPosition: (i: number) => getBgPos(i) });
        }
      });
      xPosRef.current = Math.round(clientX);
    };

    const dragEnd = () => {
      $(window).off('mousemove touchmove', drag);
      gsap.set('.ring', { cursor: 'grab' });
    };

    $(window).on('mousedown touchstart', dragStart);
    $(window).on('mouseup touchend', dragEnd);

    return () => {
      timeline.kill();
      $(window).off('mousedown touchstart', dragStart);
      $(window).off('mouseup touchend', dragEnd);
      $(window).off('mousemove touchmove', drag);
    };
  }, [isJQueryLoaded]);

  const getBgPos = (i: number) => {
    const rotationY = gsap.getProperty('.ring', 'rotationY') as number;
    return `${100 - gsap.utils.wrap(0, 360, rotationY - 180 - i * 36) / 360 * 500}px 0px`;
  };

  return (
    <>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        onLoad={() => setIsJQueryLoaded(true)}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
        strategy="afterInteractive"
      />
      <div className="wall-container">
        <div className="ring" ref={ringRef}>
          {imagePaths.map((_, index) => (
            <div key={index} className="img" />
          ))}
        </div>
      </div>
    </>
  );
}
