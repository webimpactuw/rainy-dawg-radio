import Image from 'next/image'
import PlayButton from './PlayButton';

async function getMusic() {
    const res = await fetch('https://spinitron.com/api/spin?count=1&access-token=VIT_hdbWICcgF3nGwvcLJCf6', { next: {revalidate: 30} })
    
    return res.json();
}

async function getShow() {
    const res = await fetch('https://spinitron.com/api/persona?count=1&access-token=VIT_hdbWICcgF3nGwvcLJCf6', { next: {revalidate: 30} })

    return res.json();
}

export default async function Player() {
    const music = await getMusic();
    const show = await getShow();

    return (
        <div className="flex flex-col justify-between border-2 border-black bg-white bottom-0 left-0 w-full sticky">
            <div className="flex justify-between items-center px-4 py-2">
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                    
                    <span className="text-center text-lg">Live</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                    <span className="font-bold text-lg">test show</span>
                    <span>with TEST DJ</span>
                    <span>9:00 am - 10:00 am</span>
                </div>
            
                <div className="flex items-center justify-center space-x-3">
                    <Image src={music.items[0].image}  width={61} height={61} alt={"album cover"}/>
                
                    <div className="ml-2">
                        <span className="font-bold">{music.items[0].song}</span>
                    </div>
                    <div className="ml-2">
                        <span className="text-sm">{music.items[0].artist}</span>
                    </div>

                    <PlayButton />
                </div>
            </div>
        </div>
        )
}