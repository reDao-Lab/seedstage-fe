import axiosClient from '@/app/api/axiosClient'
import { Breadcrumb } from '@/components/breadcrumb'
import { DepositArea } from '@/components/seedstage/deposit-area'
import { MainArea } from '@/components/seedstage/main-area'
import { VestingSchedule } from '@/components/seedstage/vesting-schedule'

export const tags = ['all']
export const fetchCache = 'force-no-store'

export const metadata = {
  metadataBase: new URL('https://redao-launchpad.vercel.app'),

  title:
    'reDAOSeedStage - Igniting the Potential of Early-Stage Top-Tier Projects',
  description: `reDAOSeedStage is the premier platform for elevating early-stage, top-tier projects, offering unparalleled support through capital, networks, and mentorship. We are dedicated to transforming visionary ideas into industry leaders, fostering innovation and growth from the ground up. Join our ecosystem and be a part of shaping the future's leading solutions.`,
  openGraph: {
    images: '/banner.jpeg',
  },
}

// export async function generateMetadata(
//   { params }: { params: { slug: string } },
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   const seedStages = await public_directus.request(
//     readItems('seedstages', {
//       filter: {
//         status: {
//           _in: ['open', 'upcoming', 'completed'],
//         },
//       },
//       fields: [
//         '*',
//         'iou_token.token_address',
//         'deposit_token.*',
//         'project_information.*',
//       ],
//     }),
//   )

//   const project_data = seedStages.find((s: any) => {
//     return s.project_information.slug === params.slug
//   })
//   return {
//     title: project_data.name,
//     description: project_data.short_description,
//   }
// }

const is_current_round = (start_time: any, end_time: any) => {
  if (
    new Date(start_time) <= new Date() &&
    new Date(end_time) >= new Date()
  )
    return true
  return false
}

export default async function IdoDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  // const seedStages = await public_directus.request(
  //   readItems('seedstages', {
  //     filter: {
  //       status: {
  //         _in: ['open', 'upcoming', 'completed'],
  //       },
  //     },
  //     fields: [
  //       '*',
  //       'iou_token.token_address',
  //       'iou_token.symbol',
  //       'deposit_token.*',
  //       'project_information.*',
  //     ],
  //   }),
  // )

  // console.log(21, params);

  // const project_data = seedStages.find((s: any) => {
  //   return s.project_information.slug === params.slug
  // })

  const project_data = (await axiosClient.get("/externals/seedStagesByProjectId?projectId=" + params.slug)).data
  
  let round_data: any

  const round_list:any = (await axiosClient.get("/externals/getRounds/" + project_data[0].seedStageAddress))
  for (let round of round_list) {
    const is_current = is_current_round(round.startTime, round.endTime)
    if (is_current) {
      round_data = round
    }
  }

  return (
    <div className='relative'>
      <div className='home-bg relative z-[2] pb-[120px] pt-[107px]'>
        <div className='space-y-20 block mx-auto max-w-[1280px]'>
          <section>
            <div className='px-3 xl:px-0'>
              <Breadcrumb
                list={[
                  { name: 'Home', path: '/' },
                  { name: 'Detail Project', path: '/seedstage/' + params.slug },
                ]}
              />
            </div>
            {/* <div className="text-2xl font-bold">{project.name}</div> */}

            <div className='mt-3 space-y-8 px-3 xl:px-0'>
              <MainArea
                name={project_data[0]?.project?.projectName}
                iouSymbol={project_data[0]?.iouTokenInfo?.symbol}
                iouTokenAddress={project_data[0]?.iouTokenInfo?.tokenAddress}
                vesting={'25% TGE, 1month cliff, linear vest over 4 months'}
                idoPrice={0.0}
                ido_network={'Arbitrum'}
                token_network={'Arbitrum'}
                total_raise={project_data?.total_raise}
                round_data={round_data}
                round_list={[...round_list]}
                project_logo={project_data[0]?.project?.logo}
                telegram_link={project_data[0]?.project?.telegram}
                website_link={project_data[0]?.project?.website}
                x_link={project_data[0]?.project?.twitter}
                discord_link={project_data[0]?.project?.discord}
                seedstage_status={project_data?.status}
              />
              <DepositArea
                seedStages={project_data}
                roundId={""}
                round_list={[...round_list]}
                seedstage_status={project_data?.status}
              />
            </div>

            <div className='ido-box mt-8'>
              <h2 className='text-[32px] leading-[40px] font-bold text-white uppercase pb-6 border-b border-[#3B3B3B] mb-6'>Description</h2>

              <div
                className='prose !prose-invert max-w-none'
                dangerouslySetInnerHTML={{
                  __html: "<content-missing>"
                }}
              ></div>
              <h2 className='text-[24px] leading-[32px] font-bold text-white uppercase pb-3 mt-6'>Backers/Investors/Partners</h2>
              <div
                className='prose !prose-invert max-w-none'
                dangerouslySetInnerHTML={{
                  __html: "<backers_investors_partners-missing>",
                }}
              ></div>
              <h2 className='text-[24px] leading-[32px] font-bold text-white uppercase pb-3 mt-6'>Team</h2>
              <div
                className='prose !prose-invert max-w-none'
                dangerouslySetInnerHTML={{
                  __html: "<team-missing>"
                }}
              ></div>
              <h2 className='text-[24px] leading-[32px] font-bold text-white uppercase pb-3 mt-6'>TOkenomics</h2>
              <div
                className='prose !prose-invert max-w-none'
                dangerouslySetInnerHTML={{
                  __html: "<tokenomics-missing>"
                }}
              ></div>
            </div>

            <div className='mt-8 px-3 xl:px-0'>
              <VestingSchedule />
            </div>
          </section>
        </div>
      </div>
      <div className='absolute z-[1] w-full h-full top-0 left-0 overflow-hidden'>
        <div className='w-[744px] aspect-square rounded-full bg-primary absolute -left-[500px] top-[100px]'></div>
        <div className='w-[744px] aspect-square rounded-full bg-primary absolute right-[20px] -bottom-[400px]'></div>
      </div>
    </div>
  )
}
