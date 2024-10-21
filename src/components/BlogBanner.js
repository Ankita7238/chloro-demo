import React from 'react'
import Button from './Button'
import { Cormorant, Montserrat } from 'next/font/google';

const cormorant = Cormorant({
    subsets: ['latin'],
    weight: ['400'], 
  });

  const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'], 
  });

const BlogBanner = ({message}) => {
  return (
    <div className={`${cormorant.className} w-full h-50 py-5 px-4  bg-[#023A15] flex flex-col gap-y-4 text-white text-sm sm:text-xl`}>
        <p>{message}</p>
        <Button className={`${montserrat.className} text-xs tracking-widest border-b-2 w-fit rounded-none hover:text-[#319E48] border-[#319E48] px-0 py-0 text-left `}> Read More </Button>
    </div>
  )
}

export default BlogBanner
