import React from 'react';
import Image from 'next/image';
// import your icons here, using react-icons, svg, or any other method
import { FaFacebookF, FaInstagram, FaSpotify, FaTumblr, FaXTwitter } from 'react-icons/fa6';
 
export default function Footer() {
    return (
        <div className="w-screen">
            <footer className="py-20"
            // className="m-16 p-20"
            >
                {/* Container controlling all three major components */}
                <div className='flex flex-row justify-center'>
                    {/* Container with logo and develop tag */}
                    <div className='flex flex-col'>
                        <a href='/'>
                            <Image src="/logoexpanded.png" width={300} height={300} alt="Rainy Dawg Radio"
                            className='py-7'/>
                        </a>
                        <p className="text-xs">
                            © Rainy Dawg Radio 2024 <br/>
                            Made with &lt;3 by Web Impact UW
                        </p>
                    </div>
                    {/* Decorative divider */}
                    <div className="bg-black w-0.5 mx-10"></div>
                    {/* Container with icons and address */}
                    <div className='flex flex-col'>
                        {/* Just icons */}
                        <div className='flex flex-row justify-end text-3xl space-x-16 py-12'>
                            <a href="https://x.com/rainydawgradio" className="text-black hover:text-gray-700">
                                    <FaXTwitter  />
                            </a>
                            <a href="https://www.facebook.com/RainyDawgRadio/" className="text-black hover:text-gray-700">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/rainydawgradio/" className="text-black hover:text-gray-700">
                                <FaInstagram />
                            </a>
                            <a href="https://open.spotify.com/user/duw2cz3q0rhhodijwwd5r5mc1?si=2e10d794231e42f3" className="text-black hover:text-gray-700">
                                <FaSpotify />
                            </a>
                            <a href="https://tumblr.com" className="text-black hover:text-gray-700">
                                <FaTumblr />
                            </a>
                        </div>
                        {/* Address component */}
                        <p className="text-right text-xs">
                                Husky Union Building Room 131N <br/>
                                4001E Stevens Way NE, Seattle, WA 98195
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
