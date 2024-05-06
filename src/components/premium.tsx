import PremiumIcon from '@/images/premium-icon.png'
import Image from 'next/image'

const Premium = () => {
  return (
    <div className='flex items-center gap-1 px-2 py-1.5 rounded-[4px] bg-[#FFA800]/70'>
      <Image src={PremiumIcon} alt="crown" className='h-3'/>
      <p className='uppercase text-[#FCFCFD] font-bold text-xs'>Premium</p>
    </div>
  )
}

export default Premium