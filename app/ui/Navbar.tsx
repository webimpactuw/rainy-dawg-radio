import Link from 'next/link'
 
export default function Navbar() {
    return (<>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/listen">Listen</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/zine">Zine!</Link>
        </>)
}