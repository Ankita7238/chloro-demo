import { Cormorant, Montserrat } from 'next/font/google';
import Button from './Button';
import Image from 'next/image'
import vector from '@/assets/Vector.png'

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400'], 
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'], 
});

const Contact = () => {
  return (
    <div className='relative bg-[#023A15B2] flex justify-center items-center py-24'>
      {/* top asset */}
       <Image 
          src={vector} 
          alt="vector Image" 
          width={200} 
          height={200}
          className='absolute -top-10 left-0'
        />

      <div className='mx-auto w-auto md:w-4/5 flex flex-col justify-center items-center'>

        <p className={`w-11/12 text-center text-4xl md:text-5xl text-white ${cormorant.className}`}>
          Get the latest updates about our products and services
        </p>
        
        <form className='w-full mt-8'>
          <div className='flex flex-col justify-center items-center mx-auto relative w-2/3'>
            <input 
              type="text" 
              className='w-full px-6 py-5 rounded-full border border-white bg-transparent text-white placeholder:font-semibold placeholder:text-sm placeholder:text-white' 
              placeholder='Your Email'
            />
            <Button className={`mt-4 md:mt-0 relative right-0 top-0 md:absolute md:right-1.5 md:top-1.5 w-fit text-[#023A15] font-bold ${montserrat.className} bg-white text-sm hover:bg-[#319E48] cursor-pointer`}>
              Subscribe
            </Button>
          </div>
        </form>

      </div>

      <Image 
        src={vector} 
        alt="vector Image" 
        width={100} 
        height={200}
        className='absolute -bottom-10 right-0 transform rotate-180' 
      />

    </div>
  );
};

export default Contact;
