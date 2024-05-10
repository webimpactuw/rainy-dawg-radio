import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center pl-10 pr-10 w-full bg-white pt-5 pb-5">
            <Link href="/">
                <Image src="/logoexpanded.png" height = {200} width = {200} alt={"Rainy Dawg Radio"}/>
            </Link>

            <div className="flex space-x-14">
                <Link href="/about" className="hover:text-gray-700 font-bold">About</Link>
                <Link href="/listen" className="hover:text-gray-700 font-bold">Listen</Link>
                <Link href="/blog" className="hover:text-gray-700 font-bold">Blog</Link>
                <Link href="/gallery" className="hover:text-gray-700 font-bold">Gallery</Link>
            </div>
        </nav>)
}