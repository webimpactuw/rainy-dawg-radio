'use client'
import Image from "next/image"
import { useRef, useState } from "react";

const STREAM_SRC = "http://166.62.119.4:8000/stream";

export default function PlayButton() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Function to play music
    const playMusic = () => {
        const audio = audioRef.current;
        if (audio) {
            // If the audio is paused, play it, otherwise pause it
            if (audio.paused) {
                audio.play().catch(err => console.error("Error playing the stream:", err));
                setIsPlaying(true);
            } else {
                audio.pause();
                setIsPlaying(false);
            }
        }
    }

    return (
        <>
            <button className="ml-2" onClick={playMusic}>
                {isPlaying ? (
                    <Image src="/pause.png" width={25} height={25} alt={"pause"}/>
                ) : (
                    <Image src="/play.png" width={25} height={25} alt={"play"}/>
                )}
            </button>
            {/* rainy dawg was down */}
            <audio ref={audioRef} src={STREAM_SRC} preload="none"></audio>
        </>
    )
}