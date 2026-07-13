"use client";

import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="relative w-full">
      <video
        ref={videoRef}
        src="/assets/za11y-hero-demo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto rounded-2xl shadow-[0px_1px_14px_0px_rgba(0,0,0,0.15),0px_2px_5px_2px_rgba(0,0,0,0.05)]"
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-gray-700/80 flex items-center justify-center hover:bg-gray-700 transition-colors"
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="1" width="4" height="12" rx="1" fill="white" />
            <rect x="8" y="1" width="4" height="12" rx="1" fill="white" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 1.5L12 7L3 12.5V1.5Z" fill="white" />
          </svg>
        )}
      </button>
    </div>
  );
}
