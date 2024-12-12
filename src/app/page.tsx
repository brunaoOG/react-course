"use client";

import { useEffect, useState } from "react";
import { VideoPlayer } from "../components/VideoPlayer";

const Page = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="p-5 flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold">
          {playing ? "Video rodando" : "Video pausado"}
        </h1>
        <button
          className="rounded-lg py-2 px-3 bg-gray-500 font-semibold"
          onClick={() => setPlaying(!playing)}
        >
          Play/Pause
        </button>
      </div>
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      />
    </div>
  );
};

export default Page;
