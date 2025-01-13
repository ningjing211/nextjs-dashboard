'use client';
import React, { useState } from "react";
import "@/app/ui/hiring/human.css";

export default function Human() {
  return (
    <div className="human">
        <div className="video-wrapper">
        <div className="video-mask">
        <video autoPlay playsInline muted loop preload="auto">
            {/* Video by https://www.pexels.com/es-es/@cottonbro/ */}
            <source src="https://rawcdn.githack.com/badiali/assets/e9a8ee8bac63fe1c56d04d35b21b9ff84025744f/svg-mask-cottonbro.mp4" />
        </video>
        <svg width={0} height={0}>
            <defs>
            <clipPath id="mask" clipPathUnits="objectBoundingBox">
                <path d="M1 .51C1 .78.776 1 .5 1S0 .78 0 .51C0 .237.18.117.5.017c.32-.099.5.22.5.491Z" />
            </clipPath>
            </defs>
        </svg>
        </div>
        <svg className="video-stroke" viewBox=" 0 0 1000 1000">
        <defs>
            <path
            id="strokeII"
            d="M1000 509.25C1000 780.284 776.142 1000 500 1000C223.858 1000 0 780.284 0 509.25C0 238.216 179.5 117.631 500 18.4989C820.5 -80.6326 1000 238.216 1000 509.25Z"
            />
            <path
            id="strokeIII"
            d="M1000 486.285C1000 742.145 721.655 1128.71 498.503 957.773C275.351 786.833 0 795.97 0 518.955C0 241.94 188.729 3.56133e-06 524.361 0C859.992 -3.56133e-06 1000 230.425 1000 486.285Z"
            />
            <path
            id="strokeIV"
            d="M1000 486.772C1000 742.888 759.08 1000 505.13 1000C251.181 1000 237.16 740.285 53.8374 603.103C-129.485 465.921 187.301 3.5649e-06 523.523 0C859.746 -3.5649e-06 1000 230.656 1000 486.772Z"
            />
        </defs>
        <path
            id="strokeI"
            d="M957.799 474.211C1117.26 722.834 793.371 1000 511.099 1000C228.827 1000 0 779.954 0 508.512C0 237.071 189.107 3.48967e-06 525.409 0C861.712 -3.48967e-06 798.336 225.589 957.799 474.211Z"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth={3}
            transform="translate(2 2),scale(0.99)"
        />
        </svg>
    </div>
    </div>
  );
}
