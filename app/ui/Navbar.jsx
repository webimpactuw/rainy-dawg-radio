import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about/">About</Link>
        <Link href="/listen/">Listen</Link>
        <Link href="/blog/">Blog</Link>
        <Link href="/gallery/">Gallery</Link>
        <Link href="/zine/">Zine</Link>
    </nav>
  )
}

export default Navbar