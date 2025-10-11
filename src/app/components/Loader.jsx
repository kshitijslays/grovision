import React, { useState, useEffect } from "react";

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleVideoEnd = () => {
    // Start fade-out
    setFadeOut(true);

    // Wait for animation to finish (700ms) then call onFinish
    setTimeout(() => {
      onFinish();
    }, 700);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        src="/Logo-video.mp4"
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Loader;
