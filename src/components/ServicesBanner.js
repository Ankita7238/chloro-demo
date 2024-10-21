import React from 'react';
import Button from './Button';
import { Cormorant, Montserrat } from 'next/font/google';

const cormorant = Cormorant({
    subsets: ['latin'],
    weight: ['400'], 
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'], 
});

const ServicesBanner = ({ title, message }) => {
  return (
    <div className={`${cormorant.className} z-10 w-11/12 mx-auto relative bottom-[5%] py-6 px-4 bg-white flex flex-col items-center justify-center gap-y-2 text-[#023A15] `}>
        <p className='text-xl md:text-2xl font-semibold text-[#023A15]'>{title}</p>
        <p className={`${montserrat.className}  text-sm md:text-base text-center text-[#567C49] mb-3`}>{message}</p>
        <Button className='text-xs w-fit font-semibold tracking-widest border-b-2 border-[#319E48] rounded-none text-[#319E48] hover:text-[#023A15] px-0 py-0 text-left'> Learn More </Button>
    </div>
  )
}

export default ServicesBanner;
