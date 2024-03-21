import React from 'react';
import Image from 'next/image';
// import your icons here, using react-icons, svg, or any other method
import { FaFacebookF, FaInstagram, FaSpotify, FaTumblr, FaXTwitter } from 'react-icons/fa6';
 
export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        {/* Left-side: horizontal line or decorative element */}
        <div className="border-t-2 border-gray-300 w-1/4" />

        {/* Center: logo and address */}
        

        {/* Right-side: Social Media Icons */}
        <div className="flex space-x-4 m-5">
            <a href="https://x.com" className="text-black hover:text-gray-700">
                <FaXTwitter  />
            </a>
            <a href="https://facebook.com" className="text-black hover:text-gray-700">
                <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/rainydawgradio/" className="text-black hover:text-gray-700">
                <FaInstagram />
            </a>
            <a href="https://spotify.com" className="text-black hover:text-gray-700">
                <FaSpotify />
            </a>
            <a href="https://tumblr.com" className="text-black hover:text-gray-700">
                <FaTumblr />
            </a>
        </div>

        {/* Right-side: horizontal line or decorative element */}
        <div className="border-t-2 border-gray-300 w-1/4" />
      </div>
      <div>
      <div className="text-center flex justify-center items-center flex-col">
          <Image src="/logo.png" width={70} height={70} alt="Rainy Dawg Radio" className='m-5'/>
          <p className="text-sm m-5">
            Husky Union Building Room 131N <br />
            4001E Stevens Way NE, Seattle, WA 98195
          </p>
          <p className="text-xs text-gray-600 mt-4">
            © Rainy Dawg Radio 2024
          </p>
        </div>
      </div>
    </footer>
  );
};