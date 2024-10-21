import Image from 'next/image';
import React from 'react'
import { LiaWhatsapp } from "react-icons/lia";
import { Cormorant, Montserrat } from 'next/font/google';
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400'], 
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'], 
});

const Footer = () => {
  return (
    <div className='bg-[#023A15] text-white py-8 flex flex-col justify-center items-center'>

        <div className='w-[90%] mx-auto md:w-4/5 xl:w-3/4 py-16 border-white border-b-2 flex justify-between items-center flex-wrap'>

          <div className=' w-full md:w-3/5 lg:w-2/5  flex flex-col'>

            <Image src="/images/logo_dark.png" alt="chloro-logo" className="hover:scale-105 transition-transform duration-300 mb-6" width={100} height={80}/>
            <p className={`mb-5 w-full  text-md md:text-lg ${montserrat.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. </p>
            <div className='flex space-x-4 mb-5'>
              <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'><LiaWhatsapp className='text-[#023A15] font-bold text-2xl' /></div>
              <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'><FaYoutube className='text-[#023A15] font-bold text-2xl' /></div>
              <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'><FaFacebookF className='text-[#023A15] font-bold text-xl' /></div>
              <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'><FaInstagram className='text-[#023A15] font-bold text-2xl' /></div>
            </div>
          </div>

          <div className='flex justify-start items-start flex-wrap gap-x-16 lg:gap-x-16 lg:mt-0 mt-4 lg:mx-0'>
            <div>
              <h3 className={`text-2xl md:text-4xl ${cormorant.className} mb-4 mt-2`}>Products</h3>
              <ul className={`${montserrat.className} text-base  md:font-normal font-medium leading-8`}>
                <li>Skincare</li>
                <li>MakeUp</li>
                <li>Shampoo</li>
              </ul>
            </div>
            <div>
            <h3 className={`text-2xl md:text-4xl ${cormorant.className} mb-4 mt-2`}>About Us</h3>
              <ul className={`${montserrat.className} text-base md:font-normal font-medium leading-8`}>
                <li>Our Shop</li>
                <li>Career</li>
                <li>Specialist</li>
              </ul>
            </div>
            <div>
            <h3 className={`text-2xl md:text-4xl ${cormorant.className} mb-4 mt-4` }>Support</h3>
              <ul className={`${montserrat.className} text-base md:font-normal font-medium leading-8`}>
                <li>Blog</li>
                <li>Help</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>

        </div>
        <div className={`flex items-end justify-center pt-5 font-medium tracking-widest text-base ${montserrat.className}`}>
          <p>Copyright © 2021 ASK Project</p>
        </div>

    </div>
  )
}

export default Footer