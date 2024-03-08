'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import useWindowSize from '@/hooks/use-window-size'
import 'swiper/css'
import { ProjectItem } from './project-item'

export const ProjectList = ({ data }: any) => {
  const [swiper, setSwiper] = useState<any>(null)
  const { width } = useWindowSize()

  return (
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
              status={item.status || 'Opening'}
              deposit_token={item.deposit_token}
              chain_network={item?.deposit_token?.chain_network}
            />
          </SwiperSlide>
        )
      })}

      {width < 1280 ? <SwiperSlide className='!w-4'></SwiperSlide> : null}
    </Swiper>
  )
}
