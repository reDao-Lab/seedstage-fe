'use client'

import { Breadcrumb } from '@/components/breadcrumb'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'

const MProject = () => {
  const [type, setType] = useState<string>('0')

  return (
    <section>
      <div className='px-3 xl:px-0'>
        <Breadcrumb
          list={[
            { name: 'Home', path: '/' },
            { name: 'Funded Project', path: '/me/project' },
          ]}
        />

        <div className='mt-3 space-y-6 px-3 xl:px-0'>
          <div className='flex justify-end'>
            <Select
              onValueChange={(value) => setType(value)}
              defaultValue={type}
            >
              <SelectTrigger className='w-[120px] text-white border-[#5B5B5B]'>
                <SelectValue placeholder={'Select'} className='!text-white' />
              </SelectTrigger>
              <SelectContent align='end'>
                <SelectItem value={'0'}>All</SelectItem>
                <SelectItem value={'1'}>Opening</SelectItem>
                <SelectItem value={'2'}>Ended</SelectItem>
                <SelectItem value={'3'}>...</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-1'>
            <div className='flex items-end md:items-center justify-between flex-col md:flex-row p-4 bg-[#121212] rounded-lg gap-5'>
              <div className='flex items-center w-full md:w-auto'>
                <img
                  src='https://placehold.co/48'
                  alt='PECLAND logo placeholder'
                  className='w-12 h-12 object-cover object-center mr-4 rounded-[8px]'
                />
                <span className='text-[#E7E7E7] font-medium text-base uppercase'>
                  PECLAND PRIVATE SALE
                </span>
              </div>
              <span className='px-4 py-2 rounded bg-[#66CC27] text-[#0A0A0A]'>
                Opening
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MProject
