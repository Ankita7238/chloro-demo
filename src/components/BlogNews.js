import { Cormorant, Montserrat } from 'next/font/google';
import React from 'react'
import PictureContainer from './PictureContainer';
import BlogBanner from './BlogBanner';

const cormorant = Cormorant({
    subsets: ['latin'],
    weight: ['400'], 
  });
  const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500'], 
  });

const BlogNews = () => {
  return (
    <div className='flex flex-col items-center justify-center py-28'>
        <div className='flex flex-col items-center justify-center  w-auto lg:w-4/5 mx-3 lg:mx-0 leading-loose mb-10'>
            <h2 className={`text-center text-[#023A15] ${cormorant.className}  text-5xl lg:text-6xl mb-4`}>Blog and News</h2>
            <p className={`text-center text-[#567C49] ${montserrat.className} text-lg w-full mx-8 lg:mx-0 lg:w-3/5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam.</p>
        </div>
        <div className='w-full md:w-[90%] h-max flex justify-center items-center flex-wrap gap-x-14'>
            <div className='w-3/5 sm:w-[35%] lg:w-1/4 mb-6'>
                <PictureContainer src='https://res.cloudinary.com/dlvuryigq/image/upload/v1729322498/allef-vinicius-_H4iwsvqKMI-unsplash_gis9gn.jpg' alt='blog image 1' className='w-full pb-[90%]'/>
                <BlogBanner message={'Russian prosecutor seeks to Dolce and Gabbana'}/>
            </div> 
            <div className='w-3/5 sm:w-[35%] lg:w-1/4 mb-6'>
                <PictureContainer src='https://res.cloudinary.com/dlvuryigq/image/upload/v1729322498/raphael-lovaski-Pe9IXUuC6QU-unsplash_e9v5hq.jpg' alt='blog image 2' className='w-full pb-[90%]'/>
                <BlogBanner message={'Natural look: The evolution of implants'}/>
            </div>
            <div className='w-3/5 sm:w-[35%] lg:w-1/4 mb-6'>
                <PictureContainer src='https://res.cloudinary.com/dlvuryigq/image/upload/v1729322498/jess-harper-sunday-TZBLq6MDfxc-unsplash_oso8yv.jpg' alt='blog image 3' className='w-full pb-[90%]'/>
                <BlogBanner message={'A photographer shows the beauty transition'}/>
            </div>

        </div>
        
    </div>
  )
}

export default BlogNews