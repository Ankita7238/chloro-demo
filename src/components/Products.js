"use client";

import React, { useState } from 'react';
import Button from './Button';
import { Cormorant, Montserrat } from 'next/font/google';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import products from '@/data/products.json';
import PictureContainer from './PictureContainer';


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500'],
});

const cormorant = Cormorant({
    subsets: ['latin'],
    weight: ['400'],
});

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 499, min: 0 },
      items: 3,
    },
  };
  

const Products = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current product index
    const totalProducts = products.length;

    // Function to go to the next product
    const nextProduct = () => {
        if (currentIndex < totalProducts - 3) {
          setCurrentIndex(currentIndex + 1);
        }
    };

    // Function to go to the previous product
    const prevProduct = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

  //   let carouselRef = React.useRef(null);

  // const handlePrevClick = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.previous();
  //   }
  // };

  // const handleNextClick = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.next();
  //   }
  // };

    return (
        <div className='full mx-auto flex flex-col lg:flex-row justify-center items-center gap-x-12 bg-[#023A15] my-8 py-16 '>
            {/* Text Section */}
            <div className='w-fit lg:w-1/2 mx-auto flex flex-col justify-center items-center  lg:place-items-start pl-0 lg:pl-14 text-white my-12'>
                <h2 className={`${cormorant.className} text-5xl mb-6`}>Our Product</h2>
                <p className={`${montserrat.className} text-base mb-4 `}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Button className='bg-white text-base text-[#023A15] w-fit px-3 py-2'>SHOP NOW</Button>
            </div>

            {/* Carousel Section */}
            <div className='w-[90%] mx-auto flex flex-col items-center '>
            
                <div className='relative w-full gap-x-8 flex justify-center items-center overflow-hidden mx-5 lg:mx-0'>
                {/* <Carousel
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
        > */}
                        {products.slice(currentIndex,currentIndex+3).map((product, index) => (
                            <PictureContainer
                                key={index}
                                src={product.url}
                                alt={product.name}
                                className='w-2/3 pb-[30%]'
                            />
                        ))}
          {/* </Carousel> */}
                </div>
                
                

                <div className='flex space-x-6 text-white mt-10'>
                    <button onClick={prevProduct} aria-label="Previous product">
                        <HiArrowLeft size={30} />
                    </button>
                    <button onClick={nextProduct} aria-label="Next product">
                        <HiArrowRight size={30} />
                    </button>
                </div>
                 {/* Custom Navigation Buttons Below the Carousel */}
                {/* <div className="flex space-x-6 text-white mt-6 justify-center">
                    <button onClick={handlePrevClick} aria-label="Previous product">
                        <HiArrowLeft size={40} />
                    </button>
                    <button onClick={handleNextClick} aria-label="Next product">
                        <HiArrowRight size={40} />
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default Products;
