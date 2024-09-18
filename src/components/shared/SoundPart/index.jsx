import React, { forwardRef } from "react";

const SoundPart = forwardRef(({ sound, onPlay }, ref) => {
  return (
    <div className="flex items-center justify-center p-2 my-4 bg-gray-100 rounded-md shadow-md">
      <audio ref={ref} controls className="w-full max-w-md" onPlay={onPlay}>
        <source src={sound} type="audio/mpeg" />
      </audio>
    </div>
  );
});

export default SoundPart;
