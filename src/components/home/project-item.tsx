import Link from 'next/link'

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
}: IProjectItem) => {
  const display_status =
    status === 'open' ? 'Opening' : status === 'upcoming' ? 'Upcoming' : 'Ended'
  const class_status =
    status === 'open'
      ? 'bg-[#66cc27]'
      : status === 'upcoming'
        ? 'bg-[#EA9A22]'
        : 'bg-[#CC2727]'

  return (
    <div className='max-w-[324px] max-h-[432px]' key={id}>
      <div className='space-y-8 rounded-[8px] overflow-hidden bg-[#121212]'>
        <span data-state='closed' className='relative'>
          <div className='relative z-[1]'>
            <Link href={`/seedstage/${slug}`}>
              <div className='w-full h-full overflow-hidden'>
                <img
                  src={`/assets/${cover_image}`}
                  className='w-[324px] h-[108px] object-cover object-center transition-all hover:scale-105'
                />
              </div>
            </Link>
            <div className='w-[50px] h-[50px] absolute -bottom-[25px] left-3 bg-[#121212] rounded-[8px] p-0.5'>
              {logo && (
                <img
                  src={`/assets/${logo}`}
                  alt='lt'
                  className='w-full aspect-square rounded'
                />
              )}
            </div>
          </div>
          <div className='absolute z-[2] flex items-center gap-1.5 top-3 right-3'>
            <div
              className={`py-1.5 px-3 text-[#0a0a0a] font-medium text-sm rounded-[4px] ${class_status}`}
            >
              {display_status}
            </div>
            {/* <div className='bg-white py-1.5 px-3 text-[#0a0a0a] font-medium text-sm rounded-[4px]'>
              Public
            </div> */}
          </div>
        </span>
        <div className='px-3 pb-5'>
          <div className='space-y-2'>
            <Link href={`/seedstage/${slug}`} className='flex items-center'>
              <h3 className='font-medium text-base text-[#e7e7e7] line-clamp-1 uppercase leading-[19px]'>
                {name}
              </h3>
            </Link>
            <p className='text-xs text-[#8e8e8e] line-clamp-3'>
              {short_description}
            </p>
          </div>
          <div className='mt-4 mb-4 bg-black rounded-[8px] flex w-full justify-between items-center text-[#e7e7e7] font-medium p-3'>
            <p className='text-sm'>Total Raise</p>
            <p className=''>${total_raise}</p>
          </div>

          <div className='border-t border-t-[#3b3b3b] pt-4 w-full flex justify-between items-start'>
            <div className='space-y-1 text-left'>
              <p className='text-[#8e8e8e] font-medium text-xs'>Raise Chain</p>
              <div className='flex items-center'>
                <img
                  src={`/assets/${chain_network?.logo}`}
                  alt='lt'
                  className='w-8 rounded-full mr-2'
                />
                <p className='text-[#e7e7e7] font-medium text-sm'>
                  {chain_network?.name}
                </p>
              </div>
            </div>
            <div className='space-y-1 text-right'>
              <p className='text-[#8e8e8e] font-medium text-xs'>
                Deposit token
              </p>
              <div className='flex items-center'>
                <img
                  src={`/assets/${deposit_token?.icon}`}
                  alt='lt'
                  className='w-8 rounded mr-2'
                />
                <p className='text-[#e7e7e7] font-medium text-sm'>
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
