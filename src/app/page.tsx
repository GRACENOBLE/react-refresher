"use client"
import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const myRef = useRef<HTMLVideoElement>(null);

  function handleClick() {
    
    if (myRef.current != null )
      if (isPlaying) {
      setIsPlaying(false);
      myRef.current.pause();
    } else {
      setIsPlaying(true);
      myRef.current.play();
    }
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video width="250" ref={myRef}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
