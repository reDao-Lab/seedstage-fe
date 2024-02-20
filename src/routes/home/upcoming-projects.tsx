import { ProjectList } from '@/components/home/project-list'
import StatusIco from '@/images/upcoming-status.png'
import { public_directus } from '@/lib/directus'
import { readItems } from '@directus/sdk'

import Image from 'next/image'

export async function UpcomingProjects() {
  const seedstages = await public_directus.request(
    readItems('seedstages', {
      filter: {
        status: 'upcoming',
      },
      fields: ['*', 'project_information.*'],
    }),
  )

  let data = seedstages.map((seedStage: any) => {
    return {
      ...seedStage.project_information,
      status: 'upcoming',
    }
  })

  if (data.length === 0) return null

  return (
    <div className='mt-10 pl-4 lg:pl-0'>
      <div className='flex items-center mb-[31px]'>
        <Image src={StatusIco} alt='lt' className='w-12' />
        <h2 className='font-medium text-[25px] text-white leading-[30px]'>
          Upcoming Projects
        </h2>
      </div>
      <div className=''>
        <ProjectList data={data} />
      </div>
    </div>
  )
}
