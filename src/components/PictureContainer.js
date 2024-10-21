import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const PictureContainer = ({ src, alt, className }) => {
  return (
    <div
      className={twMerge("overflow-hidden rounded-t-[50%] relative transition-transform duration-300 ease-in-out ", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        objectFit="cover"
        className="absolute transform hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      
    </div>
  );
}

export default PictureContainer;
