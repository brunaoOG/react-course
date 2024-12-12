import { useEffect, useRef } from "react";

type Props = {
  src: string;
  isPlaying: boolean;
};

export const VideoPlayer = ({ src, isPlaying }: Props) => {
  const videoTag = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    isPlaying ? videoTag.current?.play() : videoTag.current?.pause();
  });

  return (
    <div className="w-[600px] h-[500px]">
      <video ref={videoTag} src={src} playsInline loop></video>
    </div>
  )
};
