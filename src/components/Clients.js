"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import Image from 'next/image';
import clients from '@/data/client.json'; 

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 499, min: 0 },
    items: 2,
  },
};

const ClientsCarousel = () => {
  let carouselRef = React.useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="bg-[#023A15] w-full flex flex-col items-center justify-center text-white py-16">
      <h1 className="text-4xl md:text-5xl mb-8 text-center ">Our Product Also Available At</h1>

      <div className="relative w-full max-w-7xl">
        <Carousel
          responsive={responsive}
          infinite={true} // Loop through images infinitely
          partialVisible={false} // Fully slide one image at a time
          swipeable={true} // Allow swiping
          draggable={true} // Allow dragging
          autoPlay={false} // If you want auto-slide, you can enable this
          keyBoardControl={true} // Use keyboard arrows to navigate
          itemClass="px-4" // Padding between items
          removeArrowOnDeviceType={['tablet', 'mobile']}
          arrows={false} // Disable default arrows
          ref={carouselRef} // Attach carousel to a ref for manual control
        >
          {clients.map((client, index) => (
            <div key={index} className="carousel-item">
              <Image
                src={client.url}
                alt={client.name}
                width={200} // Adjust the width of the images
                height={200} // Adjust the height of the images
                className="object-contain"
              />
            </div>
          ))}
        </Carousel>

        {/* Custom Navigation Buttons Below the Carousel */}
        <div className="flex space-x-6 text-white mt-6 justify-center">
          <button onClick={handlePrevClick} aria-label="Previous product">
            <HiArrowLeft size={40} />
          </button>
          <button onClick={handleNextClick} aria-label="Next product">
            <HiArrowRight size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientsCarousel;
