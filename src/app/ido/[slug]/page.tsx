import { Breadcrumb } from '@/components/breadcrumb';
import { DepositArea } from '@/components/ido/deposit-area';
import { MainArea } from '@/components/ido/main-area';
import { VestingSchedule } from '@/components/ido/vesting-schedule';
import { directus } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const [project] = await directus.request(
    readItems("ido_projects", {
      filter: {
        slug: params.slug,
      },
      limit: 1,
    })
  );

  return {
    title: `${project.name} - Revolutionizing Blockchain Technology`,
    description: project.short_description,
  };
}

export default async function IdoDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [project] = await directus.request(
    readItems("ido_projects", {
      filter: {
        slug: params.slug,
      },
      limit: 1,
    })
  );

  return (
    <div className='relative'>
      <div className="home-bg relative z-[2] pb-[120px]">
        <div className="space-y-20 block mx-auto max-w-[1280px]">
          <section>
            <div className="px-3 xl:px-0">
              <Breadcrumb list={[{name: "Home", path: "/"}, {name: "Detail Project", path: "/ido/" + params.slug}]}/>
            </div>
            {/* <div className="text-2xl font-bold">{project.name}</div> */}

            <div className="mt-3 space-y-3 px-3 xl:px-0">
              <MainArea name={project.name} IOUName={"PECLAND"} veting={"25% TGE, 1month cliff, linear vest over 4 months"} idoPrice={999999999} ido_network={"Polygon"} token_network={"Polygon"} total_raise={999999999}/>
              <DepositArea contractAddress={"0x9f63334ac49fc949a2534e8b1f98c2a34d8dcef5"}/>
            </div>
            
            <div className="mt-3 px-3 xl:px-0">
              <div
                className="ido-box text-[#e7e7e7]"
                dangerouslySetInnerHTML={{ __html: project.content }}
              ></div>
            </div>

            <div className="mt-3 px-3 xl:px-0">
              <VestingSchedule/>
            </div>
          </section>
        </div>
      </div>
      <div className="absolute z-[1] w-full h-full top-0 left-0 overflow-hidden">
        <div className="w-[744px] aspect-square rounded-full bg-[#cc2727] absolute -left-[500px] top-[100px]"></div>
        <div className="w-[744px] aspect-square rounded-full bg-[#cc2727] absolute right-[20px] -bottom-[400px]"></div>
      </div>
    </div>
  );
}
