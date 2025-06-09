import React from "react";

const VideoTest = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        controls
        playsInline
        className="w-[80%] h-auto max-h-[80vh] object-contain border-4 border-white"
      >
        <source src="/videos/microscope.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoTest;
