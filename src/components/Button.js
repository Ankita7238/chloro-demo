import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BsArrowRight } from "react-icons/bs";
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'], 
});

const Button = ({ children, className = '', onClick }) => {
  return (
    <button
      className={twMerge(`${montserrat.className} px-6 py-4 space-x-2 rounded-full cursor-pointer uppercase `, className)}
      onClick={onClick}>
      {children}
      <BsArrowRight className='inline align-text-top'/>
    </button>
  );
};

export default Button;