import { Breadcrumb } from '@/components/breadcrumb'
import { DepositArea } from '@/components/ido/deposit-area'
import { MainArea } from '@/components/ido/main-area'
import { VestingSchedule } from '@/components/ido/vesting-schedule'
import { public_directus } from '@/lib/directus'
import { readItems } from '@directus/sdk'
import { Metadata, ResolvingMetadata } from 'next'

export const fetchCache = 'force-no-store'

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: `Revolutionizing Blockchain Technology`,
    description: 'short_description',
  }
}

const is_current_round = (start_time: any, end_time: any) => {
  if (
    new Date(start_time + 'Z') <= new Date() &&
    new Date(end_time + 'Z') >= new Date()
  )
    return true
  return false
}

export default async function IdoDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const seedStages = await public_directus.request(
    readItems('seedstages', {
      filter: {
        status: 'open' || 'upcoming' || 'completed',
      },
      fields: [
        '*',
        'iou_token.token_address',
        'deposit_token.*',
        'project_information.*',
      ],
    }),
  )

  const project_data = seedStages.find((s: any) => {
    return s.project_information.slug === params.slug
  })

  let round_list = []
  let round_data: any

  for (let round_id of project_data.rounds) {
    const round = await public_directus.request(
      readItems('seedstage_rounds', {
        filter: {
          id: round_id,
        },
      }),
    )
    const is_current = is_current_round(round[0].start_time, round[0].end_time)
    if (is_current) {
      round_data = round[0]
    }
    round_list.push(round[0])
  }

  return (
    <div className='relative'>
      <div className='home-bg relative z-[2] pb-[120px]'>
        <div className='space-y-20 block mx-auto max-w-[1280px]'>
          <section>
            <div className='px-3 xl:px-0'>
              <Breadcrumb
                list={[
                  { name: 'Home', path: '/' },
                  { name: 'Detail Project', path: '/ido/' + params.slug },
                ]}
              />
            </div>
            {/* <div className="text-2xl font-bold">{project.name}</div> */}

            <div className='mt-3 space-y-3 px-3 xl:px-0'>
              <MainArea
                name={project_data?.project_information.name}
                IOUName={project_data?.iou_token.token_address}
                veting={'25% TGE, 1month cliff, linear vest over 4 months'}
                idoPrice={0.0}
                ido_network={'Arbitrum'}
                token_network={'Arbitrum'}
                total_raise={round_data?.allocation}
                round_data={round_data}
                round_list={[...round_list]}
                project_logo={project_data?.project_information?.logo}
              />
              <DepositArea
                seedStages={project_data}
                roundId={project_data?.rounds[0]}
                round_data={round_data}
                round_index={0}
              />
            </div>

            <div className='mt-3 px-3 xl:px-0'>
              <div
                className='ido-box prose dark:prose-invert max-w-none'
                dangerouslySetInnerHTML={{
                  __html: project_data.project_information.content,
                }}
              ></div>
            </div>

            <div className='mt-3 px-3 xl:px-0'>
              <VestingSchedule />
            </div>
          </section>
        </div>
      </div>
      <div className='absolute z-[1] w-full h-full top-0 left-0 overflow-hidden'>
        <div className='w-[744px] aspect-square rounded-full bg-[#cc2727] absolute -left-[500px] top-[100px]'></div>
        <div className='w-[744px] aspect-square rounded-full bg-[#cc2727] absolute right-[20px] -bottom-[400px]'></div>
      </div>
    </div>
  )
}
