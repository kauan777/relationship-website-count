import { PauseIcon, PlayIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function FloatAudioButton() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const audio = React.useMemo(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    return audio;
  }, []);

  React.useEffect(() => {
    if (!audio) return;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  return (
    <button
      className="fixed flex items-center justify-center bottom-4 right-4 bg-white rounded-full w-12 h-12 z-10"
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {isPlaying ? (
        <PauseIcon width={16} height={16} />
      ) : (
        <PlayIcon width={16} height={16} />
      )}
    </button>
  );
}
