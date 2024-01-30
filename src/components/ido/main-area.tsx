import DiscordIco from '@/images/discord-ico.svg'
import FbIco from '@/images/fb-ico.svg'
import Pecland from '@/images/pecland.png'
import TeleIco from '@/images/tele-ico.svg'
import XIco from '@/images/x-ico.svg'
import Image from 'next/image'
import { Button } from '../ui/button'

interface IMainArea {
  name: string
  IOUName: string
  veting: string
  idoPrice: number
  ido_network: string
  token_network: string
  total_raise: number
}

interface IIdentification {
  name: string
  IOUName: string
}

interface IValuesInfo {
  idoPrice: number
  ido_network: string
  token_network: string
  total_raise: number
}

export const MainArea = ({
  name,
  IOUName,
  veting,
  idoPrice,
  ido_network,
  token_network,
  total_raise,
}: IMainArea) => {
  return (
    <div className='ido-box grid grid-cols-7 gap-6'>
      <div className='col-span-7 xl:col-span-4 space-y-6'>
        <Identification name={name} IOUName={IOUName} />
        <ValuesInfo
          idoPrice={idoPrice}
          ido_network={ido_network}
          token_network={token_network}
          total_raise={total_raise}
        />
        <VetingInfo veting={veting} />

        <div className='flex w-full justify-between items-center'>
          <p className='text-[#d65252]'>This pool requires Rookie tier</p>
          <Button size={'custom'} className='uppercase'>
            Stake more
          </Button>
        </div>
      </div>
      <div className='col-span-7 xl:col-span-3 p-3 rounded-[8px] border border-[#3b3b3b] space-y-5'>
        <div className='bg-[#e7e7e7] rounded-[8px] p-3 font-medium'>
          <p className='text-center text-xs text-[#5b5b5b]'>
            Whitelist phase end in:
          </p>
          <p className='text-center text-[#0a0a0a] text-xl mt-1.5'>
            30d : 24h : 60m : 60s
          </p>
        </div>

        <div className='overflow-visible xl:overflow-y-scroll overflow-x-hidden h-full xl:max-h-[300px] space-y-2 custom-scrollbar'>
          <div className='border border-[#CC2727] rounded-[8px] p-2 mr-1'>
            <p className='text-base font-medium text-[#CC2727]'>Pre Order</p>
            <p className='text-sm font-medium pt-1 pb-1.5 text-[#B3B3B3]'>
              Jan 29, 2024 17:00 (GMT+7)
            </p>
            <p className='border-t border-[#3B3B3B] pt-3 text-[#E7E7E7] text-sm font-medium'>
              Whitelist winner required. Guaranteed basis.
            </p>
          </div>
          <div className='border border-[#3B3B3B] rounded-[8px] p-2 mr-1'>
            <p className='text-base font-medium text-[#E7E7E7]'>Pre Order</p>
            <p className='text-sm font-medium pt-1 pb-1.5 text-[#B3B3B3]'>
              Jan 29, 2024 17:00 (GMT+7)
            </p>
            <p className='border-t border-[#3B3B3B] pt-3 text-[#E7E7E7] text-sm font-medium'>
              Whitelist winner required. Guaranteed basis.
            </p>
          </div>
          <div className='border border-[#3B3B3B] rounded-[8px] p-2 mr-1'>
            <p className='text-base font-medium text-[#E7E7E7]'>Pre Order</p>
            <p className='text-sm font-medium pt-1 pb-1.5 text-[#B3B3B3]'>
              Jan 29, 2024 17:00 (GMT+7)
            </p>
            <p className='border-t border-[#3B3B3B] pt-3 text-[#E7E7E7] text-sm font-medium'>
              Whitelist winner required. Guaranteed basis.
            </p>
          </div>
          <div className='border border-[#3B3B3B] rounded-[8px] p-2 mr-1'>
            <p className='text-base font-medium text-[#E7E7E7]'>Pre Order</p>
            <p className='text-sm font-medium pt-1 pb-1.5 text-[#B3B3B3]'>
              Jan 29, 2024 17:00 (GMT+7)
            </p>
            <p className='border-t border-[#3B3B3B] pt-3 text-[#E7E7E7] text-sm font-medium'>
              Whitelist winner required. Guaranteed basis.
            </p>
          </div>
          <div className='border border-[#3B3B3B] rounded-[8px] p-2 mr-1'>
            <p className='text-base font-medium text-[#E7E7E7]'>Pre Order</p>
            <p className='text-sm font-medium pt-1 pb-1.5 text-[#B3B3B3]'>
              Jan 29, 2024 17:00 (GMT+7)
            </p>
            <p className='border-t border-[#3B3B3B] pt-3 text-[#E7E7E7] text-sm font-medium'>
              Whitelist winner required. Guaranteed basis.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Identification = ({ name, IOUName }: IIdentification) => {
  return (
    <div className='flex '>
      <Image src={Pecland} alt='pecland' className='w-[88px] h-[88px]' />
      <div className='w-full pl-6'>
        <div className='border-b border-b-[#b3b3b3] pb-2'>
          <p className='text-xl font-medium text-[#e7e7e7]'>{name}</p>
        </div>
        <div className='pt-2 xl:pt-5 flex flex-col xl:flex-row xl:items-center justify-between gap-2.5'>
          <div className='border border-[#3b3b3b] rounded-md px-5 py-[8.5px] w-fit text-xs font-medium text-[#bebebe]'>
            IOU:{' '}
            <span className='text-balance font-medium text-[#e7e7e7]'>
              {IOUName}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='bg-transparent border border-[#3b3b3b] w-9 h-9 rounded-[6px] flex items-center justify-center'>
              <Image src={FbIco} alt='Facebook icon' className='w-5 h-5' />
            </div>
            <div className='bg-transparent border border-[#3b3b3b] w-9 h-9 rounded-[6px] flex items-center justify-center'>
              <Image src={XIco} alt='X icon' className='w-5 h-5' />
            </div>
            <div className='bg-transparent border border-[#3b3b3b] w-9 h-9 rounded-[6px] flex items-center justify-center'>
              <Image src={TeleIco} alt='Telegram icon' className='w-5 h-5' />
            </div>
            <div className='bg-transparent border border-[#3b3b3b] w-9 h-9 rounded-[6px] flex items-center justify-center'>
              <Image src={DiscordIco} alt='Discord icon' className='w-5 h-5' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ValuesInfo = ({
  idoPrice,
  ido_network,
  token_network,
  total_raise,
}: IValuesInfo) => {
  return (
    <div className='px-3 py-5 rounded-[8px] border border-[#3b3b3b] grid grid-cols-2 gap-3'>
      <div className='pl-3 col-span-1 space-y-1.5'>
        <p className='text-xs font-medium text-[#8e8e8e]'>IDO Price</p>
        <div className='flex items-center gap-2.5'>
          <p className='text-[#e7e7e7]'>{idoPrice}</p>
        </div>
      </div>
      <div className='pl-3 col-span-1 space-y-1.5 border-l border-l-[#8e8e8e]'>
        <p className='text-xs font-medium text-[#8e8e8e]'>Total Raise</p>
        <div className='flex items-center gap-2.5'>
          <p className='text-[#e7e7e7]'>{total_raise}</p>
        </div>
      </div>
      <div className='pl-3 col-span-1 space-y-1.5'>
        <p className='text-xs font-medium text-[#8e8e8e]'>Token Network</p>
        <div className='flex items-center gap-2.5'>
          <p className='text-[#e7e7e7]'>{token_network}</p>
        </div>
      </div>
      <div className='pl-3 col-span-1 space-y-1.5 border-l border-l-[#8e8e8e]'>
        <p className='text-xs font-medium text-[#8e8e8e]'>IDO Network</p>
        <div className='flex items-center gap-2.5'>
          <p className='text-[#e7e7e7]'>{ido_network}</p>
        </div>
      </div>
    </div>
  )
}

const VetingInfo = ({ veting }: { veting: string }) => {
  return (
    <div className='p-3 rounded-[8px] border border-[#3b3b3b]'>
      <p className='text-xs font-medium text-[#8e8e8e]'>Veting</p>
      <p className='text-base font-medium mt-1.5 text-[#e7e7e7]'>{veting}</p>
    </div>
  )
}
