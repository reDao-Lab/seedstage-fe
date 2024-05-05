import axiosClient from '@/app/api/axiosClient'
import { ProjectList } from '@/components/home/project-list'
import StatusIco from '@/images/completed-status.png'

export const tags = ['all']

export async function CompletedProjects() {
  const seedstages = (await axiosClient.get("/externals/projects")).data

  let data = seedstages.map((seedStage: any) => {
    return {
      deposit_token: {
        decimal: 6,
        icon: '',
        id: '9161a11e-2fbf-44cb-ab6b-9bd0e4301d5f',
        name: 'USDT',
        status: 'published',
        token_address: ''
      },
      chain_network: {
        date_created: '2024-01-04T03:58:27.000Z',
        date_updated: '2024-01-09T11:50:57.000Z',
        id: 3,
        logo: '9c622f5a-9406-4837-8cd4-1f954bb38628',
        name: 'Arbitrum',
        sort: null,
        status: 'draft',
        user_created: '341bd96a-9b91-4bc8-8a2a-dec55575078b',
        user_updated: 'dad26f7d-37f4-4b15-8949-8b60a302301e'
      },
      ...seedStage
    }
  })

  return (
    <div className='mt-10 pl-4 lg:pl-0'>
      <ProjectList
        data={data}
        icon={StatusIco}
        listName={'Completed Projects (missing: status)'}
      />
    </div>
  )
}
