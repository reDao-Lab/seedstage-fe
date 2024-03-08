'use client'

import DiscordIco from '@/images/discord-ico.svg'
import WebsiteIco from '@/images/website-ico.svg'
import TeleIco from '@/images/tele-ico.svg'
import XIco from '@/images/x-ico.svg'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import roundStore from '@/store/roundStore'

interface IMainArea {
  name: string
  IOUName: string
  vesting: string
  idoPrice: number
  ido_network: string
  token_network: string
  total_raise: number
  round_data: any
  round_list: any
  project_logo?: string
  telegram_link: string
  website_link: string
  x_link: string
  discord_link: string
}

interface IIdentification {
  name: string
  IOUName: string
  img?: string
  telegram_link: string
  website_link: string
  x_link: string
  discord_link: string
}

interface IValuesInfo {
  idoPrice: number
  ido_network: string
  token_network: string
  total_raise: number
}

export const MainArea = ({
  name,
  IOUName,
  vesting,
  idoPrice,
  ido_network,
  token_network,
  total_raise,
  round_data,
  round_list,
  project_logo,
  telegram_link,
  website_link,
  x_link,
  discord_link,
}: IMainArea) => {
  const { current_round_id, set_current_round_id } = roundStore()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [currentRound, setCurrentRound] = useState({
    round_type: '',
    name: '',
    id: '',
    allocation: 0,
    min_allocation_per_address: 0,
    max_allocation_per_address: 0,
    end_time: '',
    start_time: '',
    seedstage_id: '',
  })

  const trueUTC = useCallback((_: string) => {
    return `${_}Z`
  }, [])

  const findCurrentRound = useCallback(() => {
    if (!round_data?.start_time || !round_data?.end_time) return

    const now = new Date()
    for (let round of round_list) {
      const startTime = new Date(trueUTC(round?.start_time))
      const endTime = new Date(trueUTC(round?.end_time))

      const isInTimeRange = now >= startTime && now <= endTime
      if (isInTimeRange) {
        setCurrentRound(round)
        set_current_round_id(round.id)
        break
      }
    }
  }, [round_data?.end_time, round_data?.start_time, round_list, trueUTC])

  const calculateTimeLeft = useCallback(() => {
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (!currentRound?.end_time) return timeLeft

    const difference = +new Date(currentRound?.end_time) - +new Date()
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }, [currentRound])

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  }, [calculateTimeLeft])

  useEffect(() => {
    findCurrentRound()
  }, [findCurrentRound])

  return (
    <div className='ido-box grid grid-cols-7 gap-6'>
      <div className='col-span-7 xl:col-span-4 space-y-6'>
        <Identification
          name={name}
          IOUName={IOUName}
          img={project_logo}
          x_link={x_link}
          telegram_link={telegram_link}
          website_link={website_link}
          discord_link={discord_link}
        />
        <ValuesInfo
          idoPrice={idoPrice}
          ido_network={ido_network}
          token_network={token_network}
          total_raise={total_raise}
        />
        <vestingInfo vesting={vesting} />

        {/* <div className='flex w-full justify-between items-center'>
          <p className='text-[#d65252]'>This pool requires Rookie tier</p>
          <Button size={'custom'} className='uppercase'>
            Stake more
          </Button>
        </div> */}
      </div>
      <div className='col-span-7 xl:col-span-3 p-3 rounded-[8px] border border-[#3b3b3b] space-y-5'>
        <div className='bg-[#e7e7e7] rounded-[8px] p-3 font-medium'>
          <p className='text-center text-xs text-[#5b5b5b]'>
            {currentRound?.name} Phase end in:
          </p>
          <p className='text-center text-[#0a0a0a] text-xl mt-1.5'>
            {timeLeft.days === 0 &&
            timeLeft.hours === 0 &&
            timeLeft.minutes === 0 &&
            timeLeft.seconds === 0 ? (
              <>Ended</>
            ) : (
              <>
                {timeLeft.days > 0 ? (
                  timeLeft.days === 1 ? (
                    <span>{timeLeft.days} day, </span>
                  ) : (
                    <span>{timeLeft.days} days, </span>
                  )
                ) : null}
                <span>{formatTime(timeLeft.hours)}:</span>
                <span>{formatTime(timeLeft.minutes)}:</span>
                <span>{formatTime(timeLeft.seconds)}</span>
              </>
            )}
          </p>
        </div>

        <div className='overflow-visible xl:overflow-y-scroll overflow-x-hidden h-full xl:max-h-[300px] space-y-2 custom-scrollbar'>
          {round_list?.map((round: any) => (
            <PhaseItem
              key={round.id}
              data={round}
              isActive={round.id === currentRound.id}
              switch_round={(currentRound: any) => {
                setCurrentRound(currentRound)
                set_current_round_id(currentRound.id)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const Identification = ({
  name,
  img,
  IOUName,
  website_link,
  telegram_link,
  x_link,
  discord_link,
}: IIdentification) => {
  return (
    <div className='flex'>
      {img ? (
        <Image
          src={`/assets/${img}`}
          alt='pecland'
          height={88}
          className='rounded-lg object-contain object-center w-[88px] h-[88px]'
          width={88}
        />
      ) : null}
      <div className={`w-full ${img ? 'pl-6' : ''}`}>
        <div className='border-b border-b-[#b3b3b3] pb-2'>
          <p className='text-xl font-medium text-[#e7e7e7]'>{name}</p>
        </div>
        <div className='pt-2 xl:pt-5 flex flex-col xl:flex-row xl:items-center justify-between gap-2.5'>
          <div className='border border-[#3b3b3b] rounded-md px-5 py-[8.5px] w-fit text-xs font-medium text-[#bebebe]'>
            IOU:{' '}
            <span className='text-balance font-medium text-[#e7e7e7]'>
              {IOUName}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            {website_link && (
              <div className='bg-transparent border border-[#3b3b3b] w-9 h-9 rounded-[6px] flex items-center justify-center'>
                <a href={website_link} target='_blank'>
                  <Image
                    src={WebsiteIco}
                    alt='Discord icon'
                    className='w-5 h-5'
                  />
                </a>
              </div>
            )}
            {x_link && (
              <div className='bg-transparent border border-[#3b3b3b] w-9 h-9 rounded-[6px] flex items-center justify-center'>
                <a href={x_link} target='_blank'>
                  <Image src={XIco} alt='X icon' className='w-5 h-5' />
                </a>
              </div>
            )}
            {telegram_link && (
              <div className='bg-transparent border border-[#3b3b3b] w-9 h-9 rounded-[6px] flex items-center justify-center'>
                <a href={telegram_link} target='_blank'>
                  <Image
                    src={TeleIco}
                    alt='Telegram icon'
                    className='w-5 h-5'
                  />
                </a>
              </div>
            )}
            {discord_link && (
              <div className='bg-transparent border border-[#3b3b3b] w-9 h-9 rounded-[6px] flex items-center justify-center'>
                <a href={discord_link} target='_blank'>
                  <Image
                    src={DiscordIco}
                    alt='Discord icon'
                    className='w-5 h-5'
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const ValuesInfo = ({
  idoPrice,
  ido_network,
  token_network,
  total_raise,
}: IValuesInfo) => {
  return (
    <div className='px-3 py-5 rounded-[8px] border border-[#3b3b3b] grid grid-cols-2 gap-3'>
      <div className='pl-3 col-span-1 space-y-1.5'>
        <p className='text-xs font-medium text-[#8e8e8e]'>Token Price</p>
        <div className='flex items-center gap-2.5'>
          <p className='text-[#e7e7e7]'>{idoPrice}</p>
        </div>
      </div>
      <div className='pl-3 col-span-1 space-y-1.5 border-l border-l-[#8e8e8e]'>
        <p className='text-xs font-medium text-[#8e8e8e]'>Total Raise</p>
        <div className='flex items-center gap-2.5'>
          <p className='text-[#e7e7e7]'>{total_raise}</p>
        </div>
      </div>
      <div className='pl-3 col-span-1 space-y-1.5'>
        <p className='text-xs font-medium text-[#8e8e8e]'>Token Network</p>
        <div className='flex items-center gap-2.5'>
          <p className='text-[#e7e7e7]'>{token_network}</p>
        </div>
      </div>
      <div className='pl-3 col-span-1 space-y-1.5 border-l border-l-[#8e8e8e]'>
        <p className='text-xs font-medium text-[#8e8e8e]'>IDO Network</p>
        <div className='flex items-center gap-2.5'>
          <p className='text-[#e7e7e7]'>{ido_network}</p>
        </div>
      </div>
    </div>
  )
}

const vestingInfo = ({ vesting }: { vesting: string }) => {
  return (
    <div className='p-3 rounded-[8px] border border-[#3b3b3b]'>
      <p className='text-xs font-medium text-[#8e8e8e]'>vesting</p>
      <p className='text-base font-medium mt-1.5 text-[#e7e7e7]'>{vesting}</p>
    </div>
  )
}

const PhaseItem = ({
  data,
  isActive,
  switch_round,
}: {
  data: any
  isActive: boolean
  switch_round: (currentRound: any) => void
}) => {
  if (isActive)
    return (
      <div
        className='border border-[#CC2727] rounded-[8px] p-2 mr-1 cursor-pointer'
        onClick={() => switch_round(data)}
      >
        <p className='text-base font-medium text-[#CC2727]'>{data.name}</p>
        <p className='text-sm font-medium pt-1 pb-1.5 text-[#B3B3B3]'>
          Start time: {new Date(data.start_time + 'Z').toLocaleString('vi-VN')}
        </p>
        <p className='text-sm font-medium pt-1 pb-1.5 text-[#B3B3B3]'>
          End time: {new Date(data.end_time + 'Z').toLocaleString('vi-VN')}
        </p>
        <p className='border-t border-[#3B3B3B] pt-3 text-[#E7E7E7] text-sm font-medium'>
          {data.round_type === 'whitelist'
            ? 'Whitelist winner required. Guaranteed basis.'
            : 'Everyone can deposit.'}
        </p>
      </div>
    )

  return (
    <div
      className='border border-[#3B3B3B] rounded-[8px] p-2 mr-1 cursor-pointer'
      onClick={() => switch_round(data)}
    >
      <p className='text-base font-medium text-[#E7E7E7]'>{data.name}</p>
      <p className='text-sm font-medium pt-1 pb-1.5 text-[#B3B3B3]'>
        Start time: {new Date(data.start_time + 'Z').toLocaleString('vi-VN')}
      </p>
      <p className='text-sm font-medium pt-1 pb-1.5 text-[#B3B3B3]'>
        End time: {new Date(data.end_time + 'Z').toLocaleString('vi-VN')}
      </p>
      <p className='border-t border-[#3B3B3B] pt-3 text-[#E7E7E7] text-sm font-medium'>
        {data.round_type === 'whitelist'
          ? 'Whitelist winner required. Guaranteed basis.'
          : 'Everyone can deposit.'}
      </p>
    </div>
  )
}