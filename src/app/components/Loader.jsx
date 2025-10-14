import React, { useState, useRef } from "react";
import { Volume2 } from "lucide-react";

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => {
      onFinish();
    }, 700);
  };

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setHasStarted(true);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/logo.mp4"
        muted
        onEnded={handleVideoEnd}
        className="w-full h-auto"
      />
      
      {/* Click to Start Overlay */}
      {!hasStarted && (
        <div 
          onClick={startVideo}
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/50 backdrop-blur-sm hover:bg-black/40 transition-all duration-300"
        >
          <p className="text-white text-xl font-light">Touch anywhere to begin.</p>
        </div>
      )}
    </div>
  );
};

export default Loader;