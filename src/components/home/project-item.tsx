import Link from 'next/link'
import Premium from '../premium'

interface IProjectItem {
  id: any
  chain: string
  short_description: string
  name: string
  total_raise: number
  status: string
  cover_image: string
  slug: string
  logo: string
  deposit_token: any
  chain_network: any
  is_premium: boolean
}

export const ProjectItem = ({
  id,
  chain,
  short_description,
  name,
  total_raise,
  status,
  cover_image,
  logo,
  slug,
  deposit_token,
  chain_network,
  is_premium,
}: IProjectItem) => {
  const display_status =
    status === 'open' ? 'Opening' : status === 'upcoming' ? 'Upcoming' : 'Ended'
  const class_status =
    status === 'open'
      ? 'bg-[#009117]'
      : status === 'upcoming'
        ? 'bg-[#F06415]'
        : 'bg-[#A2A2A2]'

  return (
    <div className='max-w-[295px] max-h-[547px]' key={id}>
      <div className='space-y-6 overflow-hidden bg-transparent'>
        <span data-state='closed' className='relative'>
          <div className='relative z-[1] select-none'>
            <Link href={`/seedstage/${id}`}>
              <div className='w-full h-full overflow-hidden rounded-[12px]'>
                <img
                  src={cover_image}
                  className='w-[324px] h-[200px] object-cover object-center transition-all hover:scale-105'
                />
              </div>
            </Link>
            <div className='w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0.5'>
              {logo && (
                <img
                  src={logo}
                  alt='lt'
                  className='w-full aspect-square rounded'
                />
              )}
            </div>

            <div className="absolute top-3 right-3">
              <Premium />
            </div>
          </div>
        </span>
        <div className='pb-5'>
          <div className='flex items-center gap-1.5 mb-4'>
            <div
              className={`py-1.5 px-2 text-white font-medium text-xs rounded-[4px] ${class_status} uppercase`}
            >
              {display_status}
            </div>
          </div>
          <div className='space-y-2'>
            <Link href={`/seedstage/${id}`} className='flex items-center'>
              <h3 className='font-medium text-2xl text-primary line-clamp-1 uppercase leading-[19px]'>
                {name}
              </h3>
            </Link>
            <p className='text-base text-[#FCFCFD] line-clamp-3 leading-8'>
              {short_description}
            </p>
          </div>
          <div className='mt-4 mb-4 border border-primary rounded-[8px] flex w-full justify-between items-center text-[#e7e7e7] font-medium p-3'>
            <p className='text-sm'>Total Raise</p>
            <p className='text-[#58BD7D]'>${total_raise}</p>
          </div>

          <div className='w-full flex justify-between items-start'>
            <div className='space-y-3 text-left'>
              <p className='text-[#FCFCFD] font-medium text-sm'>Raise Chain</p>
              <div className='flex items-center'>
                <img
                  src={`/assets/${chain_network?.logo}`}
                  alt='lt'
                  className='w-6 rounded-full mr-2'
                />
                <p className='text-[#e7e7e7] font-medium text-xs'>
                  {chain_network?.name}
                </p>
              </div>
            </div>
            <div className='space-y-3 text-right'>
              <p className='text-[#FCFCFD] font-medium text-sm'>
                Deposit token
              </p>
              <div className='flex items-center'>
                <img
                  src={`/assets/${deposit_token?.icon}`}
                  alt=''
                  className='w-6 rounded mr-2'
                />
                <p className='text-[#e7e7e7] font-medium text-xs'>
                  {deposit_token.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
