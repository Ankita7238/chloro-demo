import React from 'react';
import PictureContainer from './PictureContainer';
import RoundAsset from './RoundAsset';

import { Cormorant, Montserrat } from 'next/font/google';

const cormorant = Cormorant({
    subsets: ['latin'],  
    weight: ['400'], 
  });
  
  const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500', '600'], 
  });

const BelowHeader = () => {
  return (
    <div className='w-11/12 mx-auto flex items-center justify-center py-16 px-5'>
      
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        
        {/* First Picture */}
        <div className='w-[65%] md:w-[30%] mx-auto md:mx-0 relative'>
            <PictureContainer
            src='https://res.cloudinary.com/dlvuryigq/image/upload/v1729423513/jar-of-organic-skin-care-mandarin-gel-in-sunlight-XJEHKYG_xomxrb.jpg'
            alt='blog image 3'
            className='w-full pb-[100%]'
            />
            <RoundAsset fillColor="#567C49" className="w-1/2 h-auto absolute -top-5 left-0" />

        </div>
        
        
        {/* Text Content */}
        <div className='w-[90%] md:w-[30%] mx-auto md:mx-0 flex flex-col justify-center items-center text-center gap-y-3 my-10 md:my-0'>
          <p className={`${montserrat.className} text-xs md:text-sm mb-1 text-[#023A15]`}>Alive every moment.</p>
          <h1 className={`${cormorant.className} text-3xl lg:text-5xl text-[#023A15] `}>Beauty is all about you.</h1>
          <p className={`${montserrat.className} text-sm lg:text-base text-center text-[#567C49]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae rutrum neque. Duis tincidunt euismod aliquam.</p>
        </div>

        {/* Second Picture */}
        <div className='w-[65%] md:w-[30%] mx-auto md:mx-0 relative'>
            <PictureContainer
            src='https://res.cloudinary.com/dlvuryigq/image/upload/v1729423513/stylish-sensual-woman-holding-protea-flower-at-fac-4CXRJ23_poeeat.jpg'
            alt='blog image 3'
            className='w-full pb-[100%]'
            />
            <RoundAsset fillColor="#023A15" className="w-1/2 h-auto absolute -bottom-10 -right-10 rotate-180" />
        </div>
        

      </div>
    </div>
  );
};

export default BelowHeader;
