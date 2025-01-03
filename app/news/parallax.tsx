'use client';

import '@/app/ui/news/parallax.css';

import React from 'react';
import { useEffect } from 'react';


export default function Parallax() {
  return (
    <div className="outer-box">
    {/* Container for all sliders, and pagination */}
    <main className="sliders-outer-box">
      {/* Here will be injected sliders for images, numbers, titles and links */}
      {/* Simple pagination for the slider */}
      <ul className="pagination">
        <li className="pagination__item">
          <a className="pagination__button" />
        </li>
        <li className="pagination__item">
          <a className="pagination__button" />
        </li>
        <li className="pagination__item">
          <a className="pagination__button" />
        </li>
        <li className="pagination__item">
          <a className="pagination__button" />
        </li>
      </ul>
    </main>
  </div>
    );
  }

  