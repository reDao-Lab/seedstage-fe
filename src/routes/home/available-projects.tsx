import { directus } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Image from "next/image";
import Link from "next/link";

export async function AvailableProjects() {
  const data = await directus.request(
    readItems("ido_projects", {
      filter: {
        status: "open",
      },
      limit: 10,
    })
  );
  console.log(data.length);
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">Available Projects</h2>
      <div className="flex space-x-4 pb-4">
        {data.map((item) => (
          <div className="space-y-3 w-[250px]" key={item.id}>
            <span data-state="closed">
              <div className="overflow-hidden rounded-md">
                <img
                  src={`https://api.b.army/assets/${item.cover_image}`}
                  className="h-auto w-auto object-cover object-center transition-all hover:scale-105 aspect-[4/3]"
                />
              </div>
            </span>
            <div className="space-y-1 text-sm">
              <Link href={`/ido/${item.slug}`}>
                <h3 className="font-medium leading-none">{item.name}</h3>
              </Link>
              <p className="text-xs text-muted-foreground">
                {item.short_description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
