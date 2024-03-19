'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
type PlayerProps = {show: string, 
                    dj: string, 
                    time: string, 
                    cover: string, 
                    music: string, 
                    artist: string}

export default function Player(props: PlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    // const [isLive, setIsLive] = useState();

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
        <div className="flex flex-col justify-between border-2 border-black bg-white bottom-0 left-0 w-full sticky">
            <div className="flex justify-between items-center px-4 py-2">
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                    
                    <span className="text-center text-lg">Live</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                    <span className="font-bold text-lg">The Pop Show</span>
                    <span>with DJ Shrimp</span>
                    <span>9:00 am - 10:00 am</span>
                </div>
            
                <div className="flex items-center justify-center space-x-3">
                    <Image src="/testCover.png" width={61} height={61} alt={"album cover"}/>
                
                    <div className="ml-2">
                        <span className="font-bold">Flamingo</span>
                    </div>
                    <div className="ml-2">
                        <span className="text-sm">Kero Kero Bonito</span>
                    </div>
                
                    <button className="ml-2" onClick={playMusic}>
                        {isPlaying ? (
                            <Image src="/pause.png" width={25} height={25} alt={"pause"}/>
                        ) : (
                            <Image src="/play.png" width={25} height={25} alt={"play"}/>
                        )}
                    </button>
                    {/* rainy dawg was down */}
                    <audio ref={audioRef} src="https://cp10.shoutcheap.com:18383/stream" preload="none"></audio> 
                </div>
            </div>
        </div>
        )
}