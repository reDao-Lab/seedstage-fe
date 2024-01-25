import { ProjectList } from '@/components/home/project-list';
import { directus } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import StatusIco from '@/images/completed-status.png';

import Image from 'next/image';

export async function CompletedProjects() {
  const data = await directus.request(
    readItems("ido_projects", {
      filter: {
        status: "completed",
      },
      limit: 10,
    })
  );
  return (
    <div className="mt-10 pl-4 lg:pl-0">
      <div className="flex items-center mb-[31px]">
        <Image src={StatusIco} alt='lt' className='w-12'/>
        <h2 className="font-medium text-[25px] text-white leading-[30px]">Completed Projects</h2>
      </div>
      <div className="">
        <ProjectList data={data}/>
      </div>
    </div>
  );
}
