"use client"
import React from 'react'
import PictureContainer from './PictureContainer'
import RoundAsset from './RoundAsset'
import Button from './Button'
import CountUp from 'react-countup';
import { Cormorant, Montserrat } from 'next/font/google'

const cormorant = Cormorant({
    subsets: ['latin'],  
    weight: ['400'], 
  });
  
  const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400'], 
  });

const Story = () => {
    return (
        
            <section className="w-full pb-24 md:px-8 px-0 flex md:flex-row flex-col-reverse justify-center items-center ">
              {/* Left side with image and abstract green shapes */}
              <div className="relative w-4/5 lg:1/2  flex justify-center md:justify-end items-center mt-5 ">
              <div className='w-4/5 md:w-full xl:w-4/5 relative flex justify-center md:justify-end items-center '>
                    <PictureContainer src='https://res.cloudinary.com/dlvuryigq/image/upload/v1729478495/woman-taking-a-bath-massage-soap-treat-yourself-sp-ZZG446W-2_zwhqs7.jpg' alt='blog image 2' className='w-full pb-[110%] xl:pb-[90%]'/>
                    <RoundAsset fillColor="#023A15" className=" w-2/5 md:w-1/3 h-auto absolute top-0 left-0 rotate-3" />
                    </div>
                </div>
        
              {/* Right side content card */}
              <div className=" w-full md:w-1/2 lg:w-[50%] text-white flex flex-col items-centerjustify-center gap-y-6 ">
                <div className='w-full bg-[#023A15] flex flex-col  gap-y-2 lg:gap-y-5 text-white p-[4%] lg:p-[8%] black shadow-lg relative left-0 md:-left-10 top-2/3 overflow-x-clip '>
                    <h2 className={`${cormorant.className} text-3xl lg:text-5xl mb-3 text-center md:text-left`}>Our Story</h2>
                    <p className={`${montserrat.className} text-sm lg:text-lg mb-5 text-center md:text-left`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.</p>
                    <Button className='bg-white w-fit px-5 py-3 text-[#023A15] md:self-start self-center'>READ MORE</Button>
                    <RoundAsset fillColor="#567C49" className=" w-1/3 h-auto z-10 absolute -right-12 -bottom-12 -rotate-180 " />
                </div>
                <div className=" text-center gap-x-16 gap-y-8 text-[#0a5738] flex flex-col lg:flex-row md:self-start self-center font-semibold mx-auto lg:mx-0 w-fit">
                    <div>
                        <p className={`${cormorant.className} text-3xl lg:text-5xl text-[#023A15]`}>
                            <CountUp start={300} end={955} duration={2}/>+
                        </p>
                        <p className={`${montserrat.className} text-sm font-extrabold text-[#0a5738]`}>Happy Customers</p>
                    </div>
                    <div>
                    <p className={`${cormorant.className}  text-3xl lg:text-5xl text-[#023A15]`}>
                        <CountUp start={100} end={240} duration={2}/>+
                    </p>
                    <p className={`${montserrat.className} text-sm font-extrabold text-[#0a5738]`}>Positive Reviews</p>
                    </div>
                </div>
              </div>
            </section>
          
      );
}

export default Story