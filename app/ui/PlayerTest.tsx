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
    console.log(spins.music);
    setSpins(spins);
  }

  const [timerHandle, setTimerHandle] = useState<any>();
  useEffect(() => {
    updateSpins();

    const handle = setInterval(() => {
      updateSpins();
      console.info("Getting spins");
    }, 1000);
    setTimerHandle(handle);

    return () => clearInterval(timerHandle);
  }, []);

  return (
    <div className="flex flex-col justify-between border-2 border-black bg-white bottom-0 left-0 w-full sticky">
        <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                
                <span className="text-center text-lg">Live</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
                {spins ? (<span className="font-bold text-lg">{spins.title}</span>) : (<></>)}
                <span>with TEST DJ</span>
                {spins ? (<span>{spins.start + " - " + spins.end}</span>) : (<></>)}
            </div>
        
            <div className="flex items-center justify-center space-x-3">
                {spins && spins.image != "loading" ? (<Image src={spins.image}  width={61} height={61} alt={"album cover"}/>) : (<></>)}
            
                <div className="ml-2">
                    {spins ? (<span className="font-bold">{spins.music}</span>) : (<></>)}
                </div>
                <div className="ml-2">
                    {spins ? (<span className="text-sm">{spins.artist}</span>) : (<></>)}
                </div>

                <PlayButton />
            </div>
        </div>
    </div>

  );
}

export default Player;