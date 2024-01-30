import { Button } from '../ui/button'

interface IDepositArea {
  contractAddress?: string
}

export const DepositArea = ({ contractAddress }: IDepositArea) => {
  return (
    <div className='ido-box flex w-full lg:items-center flex-col lg:flex-row justify-between gap-6'>
      <div className='space-y-3'>
        <h2 className='text-xl text-[#e7e7e7] uppercase'>Deposit</h2>
        <div className='flex flex-col lg:flex-row w-full gap-3'>
          <p className='text-[#b3b3b3] text-base'>Smart Contract:</p>
          <p className='text-[#cc2727] line-clamp-1'>{contractAddress}</p>
        </div>
      </div>

      <Button size={'custom'} className='uppercase'>
        Deposit
      </Button>
    </div>
  )
}
