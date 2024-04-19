'use client'
import Image from "next/image"
import React, { useState } from "react";
import Carousel from "./Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const MainCarousel = () => {
  return (
    <Carousel>
      <div className="flex flex-row p-10">
        <div className="w-1/2 pl-20 self-center">
            <Image src="/testImg.png" width={500} height={500} objectFit="cover" alt="Descriptive alt text"/>
          {/* <Image src="./latestblogsticker.svg" width={300} height={300} alt=""/> */}
        </div>
        <div className="w-1/2 pr-20 self-center">
          <div className="text-6xl">
            Underrated Releases of 2023
          </div>
          <div className="py-5">
            Another year is behind us. I hope it treated you with kindness. If you are reading this and you don’t treat people with kindness, I hope the year treated you with violence. While I could talk at length about the more well known releases of this year I wanted to quickly highlight a few I think deserve more attention.
          </div>
          <div>
            <button className="hover:underline">Read More</button>
          </div>
        </div>
      </div>
      <div>
        Slide 2
      </div>
    </Carousel>
  );
};

export default MainCarousel;