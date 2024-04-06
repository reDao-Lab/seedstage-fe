'use client'

import SlideTest1 from '@/images/banner-test-slide-1.png'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

const slides = [SlideTest1,SlideTest1]

export const HeroSection = () => {
  const [swiper, setSwiper] = useState<SwiperClass | any>(null)

  const prev = () => {
    swiper?.slidePrev?.()
  }

  const next = () => {
    swiper?.slideNext?.()
  }

  return (
    <section className='relative w-full flex items-center justify-between flex-col lg:flex-row px-4 lg:px-0'>
      <div className='block mx-auto max-w-[1280px] w-full mt-7 xl:mt-10'>
        <h1 className='font-bold text-3xl md:text-[45px] xl:text-[64px] xl:leading-[80px] md:leading-[70px]'>
          Blockchain investment platform <br /> with community-driven approach
        </h1>
        <p className='mt-5 mb-5 lg:mt-[44px] lg:mb-20 text-base lg:text-[22px] font-light lg:leading-[36px]'>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        <div className="relative">
          <div className='z-[2] flex items-center gap-3 absolute lg:bottom-[48px] lg:right-[48px] bottom-10 right-10'>
            <div
              className='rounded-full w-[63px] h-[63px] md:w-12 md:h-12 select-none bg-[#D9D9D9]/20 flex items-center justify-center hover:bg-primary/80 hover:scale-110 transition-all duration-300'
              onClick={prev}
            >
              <ArrowLongLeftIcon className='w-7 h-7 md:h-6 md:w-6 text-primary' />
            </div>
            <div
              className='rounded-full w-[63px] h-[63px] md:w-12 md:h-12 select-none bg-[#D9D9D9]/20 flex items-center justify-center hover:bg-primary/80 hover:scale-110 transition-all duration-300'
              onClick={next}
            >
              <ArrowLongRightIcon className='w-7 h-7 md:h-6 md:w-6 text-primary' />
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={setSwiper}
            className='w-full'
            >
            {slides.map((image: any, idx: number) => {
              return (
                <SwiperSlide key={idx} className='aspect-[16/9] lg:aspect-[1280/484] w-full rounded-lg overflow-hidden'>
                  <Image src={image} alt='banner slide item' className='w-full h-full object-cover object-center'/>
                </SwiperSlide>
              )})
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}
