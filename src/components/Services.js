import { Cormorant, Montserrat } from 'next/font/google';
import React from 'react';
import PictureContainer from './PictureContainer';
import ServicesBanner from './ServicesBanner';
import services from '@/data/services.json';

const cormorant = Cormorant({
    subsets: ['latin'],
    weight: ['400'], 
});
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500'], 
});

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16'>
        <div className='flex flex-col items-center justify-center w-4/5 mx-auto leading-loose mb-16'>
            <h2 className={`text-center text-[#023A15] ${cormorant.className} text-5xl md:text-6xl mb-4`}>Special Service from Chloro</h2>
            <p className={`text-center text-[#567C49] ${montserrat.className} text-base md:text-lg w-11/12 lg:w-3/5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam.</p>
        </div>
        <div className="container mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-10 px-4">
        {services.map((service, index) => (
          <div key={index} className="relative w-[90%] mx-auto  mb-3 flex flex-col justify-center items-center">
            <PictureContainer
              src={service.image}
              alt={service.title}
              className='w-full pb-[110%]'/> 
             <ServicesBanner title={service.title} message={service.desc}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
