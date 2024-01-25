import Link from 'next/link'

interface IProjectItem {
  id: any, 
  chain: string,  
  short_description: string, 
  name: string, 
  raise: number, 
  status: string, 
  cover_image: string, 
  slug: string
}

export const ProjectItem = ({id, chain,  short_description, name, raise = 0, status, cover_image, slug}: IProjectItem) => {
  return (
    <div className="max-w-[324px] bg-[#121212]" key={id}>
      <div className="space-y-5 rounded-[8px] overflow-hidden">
        <span data-state="closed" className='relative'>
          <div className="relative z-[1]">
            <div className="w-full h-[182px] overflow-hidden">
              <img
                src={`https://api.b.army/assets/${cover_image}`}
                className="w-full h-full object-cover object-center transition-all hover:scale-105"
              />
            </div>
          </div>
          <div className="absolute z-[2] flex items-center gap-1.5 top-3 right-3">
            <div className="bg-[#66cc27] py-1.5 px-3 text-[#0a0a0a] font-medium text-sm rounded-[4px]">{status}</div>
            <div className="bg-white py-1.5 px-3 text-[#0a0a0a] font-medium text-sm rounded-[4px]">Public</div>
          </div>
        </span>
        <div className="px-3 pb-5">
          <div className="space-y-2">
            <Link href={`/ido/${slug}`}>
              <h3 className="font-medium text-base text-[#e7e7e7] line-clamp-1 uppercase leading-[19px]">{name}</h3>
            </Link>
            <p className="text-xs text-[#8e8e8e] line-clamp-2">
              {short_description}
            </p>
          </div>
          <div className="mb-4 bg-black rounded-2 flex w-full justify-between items-center text-[#e7e7e7] font-medium text-xl py-3">
            <p>Raise:</p>
            <p>${raise}</p>
          </div>
          <div className="border-t border-t-[#3b3b3b] pt-4 w-full flex justify-between items-start">
            <div className="space-y-1 text-left">
              <p className='text-[#8e8e8e] font-medium text-xs'>Chain</p>
              <div className='flex items-center'>
                <div className=""></div>
                <p className='text-[#e7e7e7] font-medium text-sm'>{chain}</p>
              </div>
            </div>
            <div className="space-y-1 text-right">
              <p className='text-[#8e8e8e] font-medium text-xs'>Whitelist phase end in:</p>
              <div className='flex items-center'>
                <div className=""></div>
                <p className='text-[#e7e7e7] font-medium text-sm'>30d : 24h : 60m : 60s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
