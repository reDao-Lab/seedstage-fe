import { ProjectList } from '@/components/home/project-list'
import StatusIco from '@/images/avail-status.png'
import { directus } from '@/lib/directus'
import { readItems } from '@directus/sdk'

import Image from 'next/image'

export async function AvailableProjects() {
  const data = await directus.request(
    readItems('ido_projects', {
      filter: {
        status: 'open',
      },
      fields: ['*', 'ido_chains.*', 'token_chains.*'],
      limit: 10,
    }),
  )
  console.log(data.length)

  return (
    <div className='pl-4 lg:pl-0'>
      <div className='flex items-center mb-[31px]'>
        <Image src={StatusIco} alt='lt' className='w-12' />
        <h2 className='font-medium text-[25px] text-white leading-[30px]'>
          Available Projects
        </h2>
      </div>
      <div className=''>
        <ProjectList data={data} />
      </div>
    </div>
  )
}
