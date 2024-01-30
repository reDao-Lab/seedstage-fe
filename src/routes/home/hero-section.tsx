import HeroImage from '@/images/hero-image.png'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <section className='relative w-full h-[86dvh] lg:max-h-[480px] flex items-center justify-between flex-col lg:flex-row px-4 lg:px-0'>
      <div className='block mx-auto max-w-[1280px] w-full mt-7 xl:mt-0'>
        <h1 className='text-[49px] leading-[58.8px] text-white font-medium text-left lg:text-center w-full max-w-[763px] relative z-[2]'>
          Community-oriented <br className='hidden lg:inline' />
          blockchain investment platform
        </h1>
      </div>

      <div className='absolute z-[1] w-full h-full overflow-x-clip overflow-y-visible'>
        <div className='absolute left-[95px] lg:left-auto lg:-right-[10%] top-1/2 -translate-y-1/2'>
          <Image
            className='h-[1048px] lg:h-[120%] aspect-square max-w-none'
            alt='hero section image'
            src={HeroImage}
          />
        </div>
      </div>
    </section>
  )
}
