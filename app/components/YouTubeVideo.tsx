'use client';

import React from 'react';

interface YouTubeVideoProps {
    videoId: string;
    className?: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, className = '' }) => {
    return (
        <div className={`relative w-full aspect-video ${className}`}>
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default YouTubeVideo; 