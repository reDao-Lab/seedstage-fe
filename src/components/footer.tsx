import { Whitelabel_data } from '@/whitelabel-config/content'

import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='bg-black divide-y divide-[#23262F]'>
      <div className="w-full">
        <div className='w-full max-w-[1280px] block mx-auto px-4 xl:px-0'>
          <div className='py-10 w-full flex justify-center items-center gap-6 flex-col'>
            <Image
              src={Whitelabel_data.footer_logo}
              alt='redao logo'
              className='w-[198px]'
            />
            <p className='font-medium text-sm text-white'>
              {Whitelabel_data.footer_description}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className='py-6 flex items-center justify-between w-full max-w-[1280px] mx-auto px-4 xl:px-0'>
          <p className='text-[#b3b3b3] font-medium text-sm'>
            {Whitelabel_data.copyright_text}
          </p>

          <div className='flex items-center gap-2'>
            {Object.values(Whitelabel_data.socials).map(
              (item: any, key: any) => {
                if (item.link === '') return null
                return (
                  <a
                    href={item.link}
                    target='_blank'
                    className='bg-[#303645] w-9 h-9 rounded-full flex items-center justify-center'
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
    </footer>
  )
}
