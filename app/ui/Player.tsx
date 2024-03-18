'use client'
import Image from 'next/image'
import { useState } from 'react'
type PlayerProps = {show: string, 
                    dj: string, 
                    time: string, 
                    cover: string, 
                    music: string, 
                    artist: string}

export default function Player(props: PlayerProps) {
    const [sound, setSound] = useState(false);

    const playMusic = (_evt: MouseEvent<HTMLButtonElement>): void => {
        setSound(!sound);
        console.log(sound)
    }

    return (
        <div className='absolute bottom-0 left-0 flex flex-row w-full justify-between rounded-none border-black border-2'>
            <div>
                Live
            </div>
            <div className='flex flex-row'>
                <div>
                    {props.show}
                </div>
                <div>
                    {props.dj}
                </div>
                <div>
                    {props.time}
                </div>
            </div>
            <div className='flex flex-row'>
                <div>
                    <Image src="/testCover.png" width={61} height={61} alt={"album cover"}/>
                </div>
                <div>
                    {props.music}
                </div>
                <div>
                    {props.artist}
                </div>
                <div>
                    <button onClick={playMusic}>
                        <Image src="/sound.png" width={41} height={41} alt={"sound"}/>
                    </button>
                </div>
            </div>
        </div>)
}