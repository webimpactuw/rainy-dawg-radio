import Link from 'next/link'
import Image from 'next/image'
 
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center pl-10 pr-10 absolute bottom-100 left-0 w-full bg-white pt-5 pb-5">
            <Link href="/">
                <Image src="/logoexpanded.png" width={250} height={250} alt={"Rainy Dawg Radio"}/>
            </Link>

            <div className="flex space-x-6">
                <Link href="/about" className="hover:text-gray-700">About</Link>
                <Link href="/listen" className="hover:text-gray-700">Listen</Link>
                <Link href="/blog" className="hover:text-gray-700">Blog</Link>
                <Link href="/gallery" className="hover:text-gray-700">Gallery</Link>
                <Link href="/zine" className="hover:text-gray-700">Zine!</Link>
            </div>
        </nav>)
}