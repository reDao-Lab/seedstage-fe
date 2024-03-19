'use client'

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/solid'
import { Fragment, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import useWindowSize from '@/hooks/use-window-size'
import Image from 'next/image'
import 'swiper/css'
import { ProjectItem } from './project-item'

export const ProjectList = ({ data, icon, listName }: any) => {
  const [swiper, setSwiper] = useState<SwiperClass | any>(null)
  // const [swiperNumber, setSwiperNumber] = useState<number>(0)

  const { width } = useWindowSize()

  const prev = () => {
    swiper?.slidePrev?.()
  }

  const next = () => {
    swiper?.slideNext?.()
  }

  return (
    <Fragment>
      <div className='flex items-center justify-between mb-[31px] relative z-[2] pr-4 gap-2'>
        <div className='flex items-center'>
          <Image src={icon} alt='lt' className='w-12' />
          <h2 className='font-medium text-[25px] text-white leading-[30px]'>
            {listName}
          </h2>
        </div>
        <div className='flex items-center gap-3'>
          <div
            className='rounded-full w-9 h-9 md:w-12 md:h-12 select-none bg-primary flex items-center justify-center hover:bg-primary/80 hover:scale-110 transition-all duration-300'
            onClick={prev}
          >
            <ArrowLongLeftIcon className='w-7 h-7 md:h-6 md:w-6 text-white' />
          </div>
          <div
            className='rounded-full w-9 h-9 md:w-12 md:h-12 select-none bg-primary flex items-center justify-center hover:bg-primary/80 hover:scale-110 transition-all duration-300'
            onClick={next}
          >
            <ArrowLongRightIcon className='w-7 h-7 md:h-6 md:w-6 text-white' />
          </div>
        </div>
      </div>
      <div className=''>
        <Swiper
          spaceBetween={16.44}
          slidesPerView={'auto'}
          onSlideChange={() => console.log('slide change')}
          onSwiper={setSwiper}
          className='w-full'
        >
          {data.map((item: any) => {
            return (
              <SwiperSlide key={item.id} className='!w-[324px]'>
                <ProjectItem
                  id={item.id}
                  name={item.name}
                  short_description={item.short_description}
                  chain='Arbitrum'
                  cover_image={item.cover_image}
                  logo={item.logo}
                  total_raise={item.total_raise}
                  slug={item.slug}
                  status={item.status}
                  deposit_token={item.deposit_token}
                  chain_network={item?.deposit_token?.chain_network}
                />
              </SwiperSlide>
            )
          })}

          {width < 1280 ? <SwiperSlide className='!w-4'></SwiperSlide> : null}
        </Swiper>
      </div>
    </Fragment>
  )
}
