import Image from 'next/image'
import MainGallery from './mainSection/GalleryCards'

export default function Gallery() {
    return (
        <div className="w-full">
            <header className="bg-rdr-purple text-3xl text-center font-semibold pt-20 pb-10 h-30">
                Gallery
            </header>
            <MainGallery/>
            <header>
                <Image src="/zine.png" className="mx-auto" width={400} height={400} alt={"Meet the Team"}/>
            </header>
        </div>
    )
}