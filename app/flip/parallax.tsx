'use client';

import '@/app/ui/flip/parallax.css';
import React from 'react';
import { useEffect } from 'react';


export default function Parallax() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fadeInUp, .animate-slideInLeft, .animate-zoomIn, .animate-zoomOut');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.3 });
  
    elements.forEach(el => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);

  return (
        <div id="parallax-world-of-ugg">
        <section>
          <div id="brand" className="title">
            {/* <h3>Ever Changing</h3> */}
            <h1>Like My Style?</h1>
          </div>
        </section>
        <section id="origin">
          <div className="parallax-philosophy-one  animate-fadeInUp">
            {/* <h2>Philosophy</h2> */}
          </div>
        </section>
        
        <section  className="section-words">
          <div id="story" className="block">
            <p>
              萬萬奶昔店有什麼特別的？萬萬奶昔力圖再開台灣罕見的奶昔市場，但並不僅僅止步於單純的又一間飲料店，而是以走在科技最前沿的人工智慧AI技術為主枝幹，匯賦新創的各項獨家技術為繁茂的枝葉，是極為前衛、且為此而生的線下大型語言模型互動及學習場域——想像走進一間飲料店，出聲服務的卻是訓練有素的AI，在有如太空艙般的冷調空間裡，填滿了襲自酸性設計的迷幻色系——才踏進去，便宛如身置星際異空間，沒錯，這就是此一世代最新穎的體驗，所有意想不到的神奇體驗，都將在此發生。
            </p>
          </div>
        </section>
        
        <section>
          <div className="parallax-philosophy-two  animate-slideInLeft">
            {/* <h2>Culture</h2> */}
          </div>
        </section>

        <section  className="section-words">
          <div className="block">
            
            <div className="sub-title">萬萬奶昔店與匯賦新創有什麼聯繫？</div>
            <p>走入線下，我們自然是鏈結了自家的品牌生態系，萊吸粉的LINE CRM系統提供了來客者的便利，你也可以在這裡找到匯賦新創其他品牌的蹤影，或許是一堂限期打折的天賦銀行興趣課程，又或者是奶昔與植物意料之外的甜美碰撞？萬萬想不到，這裡的一切只會有驚奇。</p>
           </div>
        </section>

        <section>
          <div className="parallax-philosophy-three animate-zoomIn">
            {/* <h2>Believe</h2> */}
          </div>
        </section>

        <section  className="section-words">
          <div className="block">
            <p>那麼這神奇的奶昔店究竟會在何時正式展店營業呢？</p>
            <p>歡迎隨時關注我們的最新消息！</p>
           </div>
        </section>

        <section>
          <div className="parallax-philosophy-four animate-zoomOut">
            {/* <h2>Imagine</h2> */}
          </div>
        </section>



      </div>
    );
  }