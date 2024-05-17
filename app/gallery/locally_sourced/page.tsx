import Link from 'next/link'
import Images from './Moments'

export default function LocallySourced() {
    return(
        <>
            <header className="flex flex-row bg-rdr-yellow p-16 pt-20">
                {/* Container w back button */}
                <div>
                    <Link href="/gallery" className="font-normal text-sm pr-20 pl-48">← Back</Link>
                </div>
                {/* Container w title and parent page (i.e., Gallery) */}
                <div className='flex flex-col text-5xl font-semibold'>
                    locally sourced
                    <p className='text-base font-normal pt-4'>
                        Gallery
                    </p>
                </div>
            </header>
            <Images></Images>
        </>
    )
}