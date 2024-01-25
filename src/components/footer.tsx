import DiscordIco from '@/images/discord-ico.svg';
import FbIco from '@/images/fb-ico.svg';
import RedaoLogo from '@/images/redao-logo.png';
import TeleIco from '@/images/tele-ico.svg';
import XIco from '@/images/x-ico.svg';

import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='bg-[#121212]'>
      <div className="w-full max-w-[1280px] block mx-auto px-4 xl:px-0">
        <div className="py-10 w-full flex justify-between md:items-end gap-6 flex-col md:flex-row items-start">
          <div className="space-y-3">
            <Image src={RedaoLogo} alt='redao logo' className='w-[198px]'/>
            <p className='font-medium text-sm text-[#b3b3b3]'>We are community-oriented blockchain investment fund.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#5b5b5b] w-9 h-9 rounded-[6px] flex items-center justify-center">
              <Image src={FbIco} alt='Facebook icon' className='w-5 h-5'/>
            </div>
            <div className="bg-[#5b5b5b] w-9 h-9 rounded-[6px] flex items-center justify-center">
              <Image src={XIco} alt='X icon' className='w-5 h-5'/>
            </div>
            <div className="bg-[#5b5b5b] w-9 h-9 rounded-[6px] flex items-center justify-center">
              <Image src={TeleIco} alt='Telegram icon' className='w-5 h-5'/>
            </div>
            <div className="bg-[#5b5b5b] w-9 h-9 rounded-[6px] flex items-center justify-center">
              <Image src={DiscordIco} alt='Discord icon' className='w-5 h-5'/>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 flex items-center justify-center w-full border-t border-t-[#3b3b3b]">
        <p className='text-[#b3b3b3] font-medium text-sm'>Copyright by reDAO</p>
      </div>
    </footer>
  )
}
