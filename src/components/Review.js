"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import reviews from '@/data/review.json';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Cormorant, Montserrat } from 'next/font/google';


const cormorant = Cormorant({
    subsets: ['latin'],  
    weight: ['400'], 
  });

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'], 
  });

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current review index

  // Function to go to the next review
  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous review
  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='w-full flex flex-col-reverse lg:flex-row justify-center items-stretch bg-[#023A15] py-8'>

      {/* Review Section */}
      <div className='py-10 md:py-24 w-full lg:w-1/2  h-5/6 lg:h-auto flex items-center justify-center text-white bg-[#023A15]'>
        <div className='lg:w-[60%] w-4/5 flex flex-col items-center justify-center my-4'>
          <h2 className={`${cormorant.className} text-5xl lg:text-6xl mb-4 `}>
            Review from our Customers
          </h2>

          {/* Display current review */}
          <div className='w-full py-6 overflow-hidden h-3/4' key={reviews[currentIndex].name}>
            <p className={` ${montserrat.className} mb-4 text-base lg:text-lg overflow-hidden`}> 
              {reviews[currentIndex].desc}
            </p>
            <p className={` ${cormorant.className} font-semibold text-xl lg:text-2xl`}>
              {reviews[currentIndex].name}
            </p>
            <div className='flex justify-between items-center'>
                <p className={`${montserrat.className} text-sm lg:text-base`}>
                  {reviews[currentIndex].title}
                </p>
                <div className='flex space-x-4'>
                    <button onClick={prevReview} aria-label="Previous review">
                        <HiArrowLeft size={20} />
                    </button>
                    <button onClick={nextReview} aria-label="Next review">
                        <HiArrowRight size={20} />
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className='w-full lg:w-1/2 relative flex-grow h-64 lg:h-auto'>
        <Image
          src='https://res.cloudinary.com/dlvuryigq/image/upload/v1729354879/lifting-anti-wrinkle-collagen-patches-under-eyes-RB522JG_y3wqv1.jpg'
          alt='review section image'
          fill
          style={{ objectFit: "cover" }}
          className="transform hover:opacity-70"
        />
      </div>

    </div>
  );
};

export default Review;
