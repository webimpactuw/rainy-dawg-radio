'use client'
import Image from "next/image"
import React, { useState } from "react";
import Carousel from "./Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const MainCarousel = () => {
  return (
    <Carousel>
      <img src="https://via.placeholder.com/800x400?text=Image+1" alt="Image 1" />
      <img src="https://via.placeholder.com/800x400?text=Image+2" alt="Image 2" />
      <img src="https://via.placeholder.com/800x400?text=Image+3" alt="Image 3" />
    </Carousel>
  );
};

export default MainCarousel;