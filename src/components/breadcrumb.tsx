import ChevronRightIcon from "@/images/chevron-right.svg"
import Image from 'next/image'
import Link from 'next/link'

interface IBreadcrumb {
  list: IBreadcrumbList[]
}

interface IBreadcrumbList {
  name: string,
  path?: string
}

export const Breadcrumb = ({list}:IBreadcrumb) => {
  return (
    <div className='flex w-full gap-3 items-center'>
      {
        list.map((_, idx)=>
        <div key={idx} className='flex items-center gap-3'>
          <Link href={_.path||""}>
            <p className={`${idx === list.length - 1?"text-[#cc2727]":"text-[#e7e7e7]"} text-base font-medium`}>{_.name}</p>
          </Link>
          {
            idx !== list.length - 1 ? <Image src={ChevronRightIcon} alt='chevron right icon'/> : null
          }
        </div>
        )
      }
    </div>
  )
}
