import { directus } from "@/lib/directus";
import { readItems, readSingleton } from "@directus/sdk";
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
    <div>
      <h1>IDO Details Page</h1>
      <div className="text-2xl font-bold">{project.name}</div>
      <div className="">
        <div
          className="prose mx-auto border rounded-md p-4 mt-6"
          dangerouslySetInnerHTML={{ __html: project.content }}
        ></div>
      </div>
    </div>
  );
}
