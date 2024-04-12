import React, { useState } from "react";

const Carousel = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? React.Children.count(children) - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === React.Children.count(children) - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative bg-gradient-to-b from-white from-85% to-rgba(231,189,251,255) w-screen h-3/4">
      <div className="overflow-hidden w-screen h-2/3">
        {React.Children.map(children, (child, index) =>
          index === currentImage ? child : null
        )}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-red px-10 py-1 rounded-full text-[2rem]"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-#d3d3de px-10 py-1 rounded-full text-[2rem]"
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
