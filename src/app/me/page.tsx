'use client'

import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/ui/button'

import TeleIco from '@/images/tele-ico.svg'
import XIco from '@/images/x-ico.svg'
import { shorten_address } from '@/lib/utils'
import Image from 'next/image'
import { useAccount } from 'wagmi'

const Me = () => {
  const account = useAccount()
  return (
    <section>
      <div className='px-3 xl:px-0'>
        <Breadcrumb
          list={[
            { name: 'Home', path: '/' },
            { name: 'Profile', path: '/me' },
          ]}
        />

        <div className='mt-3 px-3 xl:px-0'>
          <div className='grid grid-cols-9 w-full gap-3'>
            <div className='rounded-[12px] overflow-hidden shadow-lg bg-[#121212] p-5 col-span-full xl:col-span-3'>
              <div className='flex items-center space-x-4 mb-6 flex-col gap-6'>
                <img
                  className='rounded-full h-[88px] w-[88px]'
                  src='https://placehold.co/88'
                  alt='User avatar placeholder'
                />
                <div className='text-[#E7E7E7] flex items-center gap-4'>
                  <div className='font-medium text-xl'>
                    {shorten_address(account?.address || '')}
                  </div>
                </div>
              </div>
              <div className='mb-6 space-y-[14px]'>
                <p className='text-[#8E8E8E] text-base'>Main Wallet Address</p>
                <div className='flex items-center justify-between gap-4 border-b w-full pb-2 border-b-[#8E8E8E]'>
                  <p className='text-[#5B5B5B] text-xl'>
                    {shorten_address(account?.address || '')}
                  </p>
                  <button className='text-[#D65252] font-medium'>Copy</button>
                </div>
              </div>
              <div className='mb-6 space-y-1.5'>
                <p className='text-[#8E8E8E] text-base'>Email Address</p>
                <Button size={'custom'} className='uppercase font-bold w-full'>
                  Add your mail
                </Button>
              </div>
              <div className='flex gap-2 justify-between w-full'>
                <button className='flex-1 gap-2.5 flex items-center justify-center border border-[#8E8E8E] text-[#8E8E8E] font-medium py-2 px-4 rounded-[6px]'>
                  <Image src={XIco} alt='X icon' className='w-5 h-5' />
                  Connect
                </button>
                <button className='flex-1 gap-2.5 flex items-center justify-center border border-[#8E8E8E] text-[#8E8E8E] font-medium py-2 px-4 rounded-[6px]'>
                  <Image
                    src={TeleIco}
                    alt='Telegram icon'
                    className='w-5 h-5'
                  />
                  Connect
                </button>
              </div>
            </div>

            <div className='rounded-[12px] overflow-hidden shadow-lg bg-[#121212] p-5 col-span-full xl:col-span-4 space-y-6'>
              <h2 className='text-[#E7E7E7] text-xl mb-4'>
                Sub Wallet Address
              </h2>
              <div className='space-y-[14px]'>
                <p className='text-[#8E8E8E] text-base'>BTC Wallet</p>
                <div className='flex items-center justify-between gap-4 border-b w-full pb-2 border-b-[#8E8E8E]'>
                  <p className='text-[#5B5B5B] text-xl'>Not connected</p>
                  <button className='text-[#D65252] font-medium'>Add</button>
                </div>
              </div>
              <div className='space-y-[14px]'>
                <p className='text-[#8E8E8E] text-base'>BTC Wallet</p>
                <div className='flex items-center justify-between gap-4 border-b w-full pb-2 border-b-[#8E8E8E]'>
                  <p className='text-[#5B5B5B] text-xl'>Not connected</p>
                  <button className='text-[#D65252] font-medium'>Add</button>
                </div>
              </div>
              <div className='space-y-[14px]'>
                <p className='text-[#8E8E8E] text-base'>BTC Wallet</p>
                <div className='flex items-center justify-between gap-4 border-b w-full pb-2 border-b-[#8E8E8E]'>
                  <p className='text-[#5B5B5B] text-xl'>Not connected</p>
                  <button className='text-[#D65252] font-medium'>Add</button>
                </div>
              </div>
              <div className='space-y-[14px]'>
                <p className='text-[#8E8E8E] text-base'>BTC Wallet</p>
                <div className='flex items-center justify-between gap-4 border-b w-full pb-2 border-b-[#8E8E8E]'>
                  <p className='text-[#5B5B5B] text-xl'>Not connected</p>
                  <button className='text-[#D65252] font-medium'>Add</button>
                </div>
              </div>
            </div>

            <div className='rounded-[12px] overflow-hidden shadow-lg bg-[#121212] p-5 col-span-full xl:col-span-2'>
              <h2 className='text-[#E7E7E7] text-xl'>Account Information</h2>
              <p className='text-[#B3B3B3] text-sm mb-6 mt-3'>
                You must stake $RD to achieve min Rank (Rookie) before KYC.
              </p>
              <Button size={'custom'} className='font-bold uppercase w-full'>
                STAKE NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Me
