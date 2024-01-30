import LogoIco from '@/images/redao-ico.svg';
import Image from 'next/image';

export function Logo() {
  return (
    <div className="relative z-20 flex items-center text-lg font-medium">
      <Image src={LogoIco} alt='logo' className='w-[65px]'/>
    </div>
  );
}
