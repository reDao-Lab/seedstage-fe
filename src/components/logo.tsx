import { Whitelabel_data } from '@/whitelabel-config/content'
import Image from 'next/image'

export function Logo() {
  return (
    <div className='relative z-20 flex items-center text-lg font-medium'>
      <Image
        src={Whitelabel_data.header_logo}
        alt='logo'
        className='w-[65px]'
      />
    </div>
  )
}
