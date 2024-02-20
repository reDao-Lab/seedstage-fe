import { ProjectList } from '@/components/home/project-list'
import { public_directus } from '@/lib/directus'
import { readItems } from '@directus/sdk'
import StatusIco from '@/images/completed-status.png'

import Image from 'next/image'

export async function CompletedProjects() {
  const seedstages = await public_directus.request(
    readItems('seedstages', {
      filter: {
        status: 'completed',
      },
      fields: ['*', 'project_information.*'],
    }),
  )

  let data = seedstages.map((seedStage: any) => {
    return {
      ...seedStage.project_information,
      status: 'completed',
    }
  })

  if (data.length === 0) return null

  return (
    <div className='mt-10 pl-4 lg:pl-0'>
      <div className='flex items-center mb-[31px]'>
        <Image src={StatusIco} alt='lt' className='w-12' />
        <h2 className='font-medium text-[25px] text-white leading-[30px]'>
          Completed Projects
        </h2>
      </div>
      <div className=''>
        <ProjectList data={data} />
      </div>
    </div>
  )
}
