'use client'
import { useEffect, useRef, useState } from "react";
import styles from "./Player.module.scss";
import PlayButton from "./PlayButton";
import Image from "next/image";

const STREAM_SRC = "http://166.62.119.4:8000/stream";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  function playPause() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  const [spins, setSpins] = useState<any>(null);

  async function updateSpins() {
    const res = await fetch("/api/spins");
    const spins = await res.json();
    // console.log(spins.music);
    setSpins(spins);
  }

  const [timerHandle, setTimerHandle] = useState<any>();
  useEffect(() => {
    updateSpins();

    const handle = setInterval(() => {
      updateSpins();
      // console.info("Getting spins");
    }, 1000);
    setTimerHandle(handle);

    return () => clearInterval(timerHandle);
  }, []);

  return (
    <div className="player flex flex-col border-t-2 border-gray bg-white bottom-0 left-0 w-full sticky">
        <div className="flex items-center justify-between px-10 py-2 space-x-6">
          <section className="flex items-center space-x-2">
            <div id="liveCircle" className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-center text-gray-500">Live</span>
          </section>

          <section className="flex items-center space-x-2">
            <div>
              {spins && spins.image != "loading" ? (<Image src={spins.image}  width={61} height={61} alt={"album cover"}/>) : (<></>)}
            </div>
            <div>
                {spins ? (<span className="font-semibold">{spins.music}</span>) : (<></>)}
            </div>
            <div>
              <p><span className="text-gray-500">by</span> {spins ? (<span>{spins.artist}</span>) : (<></>)}</p>
            </div>
          </section>

          <section>
            <p className="text-gray-500">Playing on</p>
            <div>
              {spins ? (<span className="font-bold">{spins.title}</span>) : (<></>)}
            </div>
          </section>

          <PlayButton />
        </div>
    </div>

  );
}

export default Player;