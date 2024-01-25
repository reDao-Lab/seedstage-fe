import HeroImage from '@/images/hero-image.png';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className='w-full h-[86dvh] lg:max-h-[480px] flex items-center justify-between flex-col lg:flex-row px-4 lg:px-0'>
      <h1 className='text-[49px] leading-[58.8px] text-white font-medium'>
        We are community-oriented blockchain investment fund.
      </h1>

      <Image className='h-[45%] md:h-auto w-full md:w-[40%] object-contain object-center' alt='hero section image' src={HeroImage}/>
    </section>
  )
}
