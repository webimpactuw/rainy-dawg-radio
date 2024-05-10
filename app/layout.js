import { Azeret_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Player from "./ui/PlayerTest";
import Footer from "./ui/Footer";

const inter = Azeret_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Rainy Dawg Radio</title>
        <link rel="icon" href="/logo.png"/>
        <meta
          name="author"
          content="Web Impact: Richie, Ayeush, Sophia, William, Farrel, Valentina, Sunny"
        />
      </head>
      <body className={inter.className + " flex flex-col overscroll-none"}>
        <Navbar/>
        {children}
        <Footer/>
        <Player/>
      </body>
    </html>
  );
}
