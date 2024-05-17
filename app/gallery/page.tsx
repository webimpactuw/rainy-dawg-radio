import Image from 'next/image'
import MainGallery from './mainSection/GalleryCards'
import ZineSection from './Zines'

export default function Gallery() {
    return (
        <div className="w-full">
            <header className="bg-rdr-purple py-8">
                <div className='flex flex-row justify-center'>
                    <Image src="/logoGallery.png" alt="logo one" width={150} height={150}
                    className='z-10'/>
                    <div className='large-heading p-4 pt-16 font-semibold z-10'>
                        Gallery
                    </div>
                </div>
            </header>
            <MainGallery/>
            <ZineSection/>
        </div>
    )
}