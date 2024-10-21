"use client"
import React from 'react'
import Button from './Button'
import heroImages from '@/data/hero_pagination.json'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import PictureContainer from './PictureContainer';
import { Cormorant, Montserrat } from 'next/font/google';
import Svector from '@/assets/Vector-straight.png'
import Image from 'next/image';

const cormorant = Cormorant({
    subsets: ['latin'],  
    weight: ['400'], 
  });
  
  const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500'], 
  });

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    }
  };

const Hero = () => {

    let carouselRef = React.useRef(null);
    const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }};

    const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }};

  return (
    <div className='w-full bg-[#023A15] pb-10 flex justify-center items-center text-white '>
        <div className='w-11/12 mx-auto flex md:flex-row flex-col justify-center items-center  gap-x-5'>
            <div className='w-full md:w-1/2 lg:w-2/5 flex flex-col md:place-items-start place-items-center '>
                <p className={`${cormorant.className} text-4xl  md:text-5xl xl:text-6xl  mb-6 md:mb-12 leading-snug md:leading-normal tracking-wider md:text-left text-center`}>A whole <span className='italic'>new world</span>, a whole <span className='italic'>new look.</span></p>
                <p className={`w-11/12 ${montserrat.className} text-base leading-tight md:leading-snug mb-4 md:mb-8 md:text-left text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <Button className='w-fit bg-white text-[#023A15] px-3 py-3 lg:text-sm text-xs border-2 hover:border-white hover:bg-[#023A15] hover:text-white'>Discover More</Button>
            </div>
            <div className='relative mt-6 w-full md:w-1/2 lg:w-3/5 '>
            <Image 
                src={Svector} 
                alt="vector Image" 
                width={200} 
                height={200}
                className='absolute -bottom-0 right-5'/>
                <Image 
                src={Svector} 
                alt="vector Image" 
                width={150} 
                height={150}
                className='absolute bottom-5 -left-16'/>
            <Carousel
                responsive={responsive}
                infinite={true} // Loop through images infinitely
                partialVisible={false} // Fully slide one image at a time
                swipeable={true} // Allow swiping
                draggable={true} // Allow dragging
                autoPlay={false} // If you want auto-slide, you can enable this
                keyBoardControl={true} // Use keyboard arrows to navigate
                itemClass="px-3" // Padding between items
                arrows={false} // Disable default arrows
                ref={carouselRef} // Attach carousel to a ref for manual control
                >
                {heroImages.map((image, index) => (
                    <div key={index} className="w-full ">
                        <PictureContainer
                            src={image.url}
                            alt={image.name}
                            className="object-cover w-full pb-[120%] md:pb-[130%]"
                        />
                    </div>
          ))}
        </Carousel>
        <div className="flex gap-x-6 text-white mt-8 ml-5 md:justify-start justify-center ">
          <button onClick={handlePrevClick} aria-label="Previous product">
            <HiArrowLeft size={35} />
          </button>
          <button onClick={handleNextClick} aria-label="Next product">
            <HiArrowRight size={35} />
          </button>
        </div>

            </div>  
        </div>
    </div>
  )
}

export default Hero