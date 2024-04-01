import { Whitelabel_data } from '@/whitelabel-config/content'

import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='bg-[#121212]'>
      <div className='w-full max-w-[1280px] block mx-auto px-4 xl:px-0'>
        <div className='py-10 w-full flex justify-between md:items-end gap-6 flex-col md:flex-row items-start'>
          <div className='space-y-3'>
            <Image
              src={Whitelabel_data.footer_logo}
              alt='redao logo'
              className='w-[198px]'
            />
            <p className='font-medium text-sm text-[#b3b3b3]'>
              {Whitelabel_data.footer_description}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            {Object.values(Whitelabel_data.socials).map(
              (item: any, key: any) => {
                if (item.link === '') return null
                return (
                  <a
                    href={item.link}
                    target='_blank'
                    className='bg-[#5b5b5b] w-9 h-9 rounded-[6px] flex items-center justify-center'
                    key={key}
                  >
                    <Image src={item.icon} alt='X icon' className='w-5 h-5' />
                  </a>
                )
              },
            )}
          </div>
        </div>
      </div>
      <div className='py-3 flex items-center justify-center w-full border-t border-t-[#3b3b3b]'>
        <p className='text-[#b3b3b3] font-medium text-sm'>
          {Whitelabel_data.copyright_text}
        </p>
      </div>
    </footer>
  )
}
