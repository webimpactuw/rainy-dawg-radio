import { Azeret_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Player from "./ui/PlayerTest";
import Footer from "./ui/Footer";

const azeret = Azeret_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-azeretmono',
});

const sans = DM_Sans({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-dmsans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${azeret.variable} font-sans`}>
      <head>
        <title>Rainy Dawg Radio</title>
        <link rel="icon" href="/logo.png"/>
        <meta
          name="author"
          content="Web Impact: Richie, Ayeush, Sophia, William, Farrel, Valentina, Sunny"
        />
      </head>
      <body className={"flex flex-col overscroll-none"}>
        <Navbar/>
        {children}
        <Footer/>
        <Player/>
      </body>
    </html>
  );
}
