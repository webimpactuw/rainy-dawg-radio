import Link from 'next/link'
import Images from './Moments'

export default function LocallySourced() {
    return(
        <>
            <header className="bg-rdr-yellow text-5xl text-center font-semibold pt-20 pb-10 h-30">
                locally sourced
                <p className="font-normal text-sm p-4">
                    Gallery
                </p>
                <Link href="/gallery" className="font-normal text-sm p-4">← back</Link>
            </header>
            <Images></Images>
        </>
    )
}