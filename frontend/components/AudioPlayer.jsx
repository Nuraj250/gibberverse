import React from "react";

const AudioPlayer = ({ src }) => {
  return (
    <div className="mt-4">
      <audio controls src={src} className="w-100" />
    </div>
  );
};

export default AudioPlayer;
