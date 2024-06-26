'use client'

import DiscordIco from '@/images/icons/discord.svg'
import TeleIco from '@/images/icons/tele.svg'
import XIco from '@/images/icons/x.svg'
import ProjectBackground from '@/images/project-bg.png'
import roundStore from '@/store/roundStore'
import WebsiteIco from '@/whitelabel-config/images/social-icons/website-ico.svg'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import Premium from '../premium'

interface IMainArea {
  name: string
  iouSymbol: string
  iouTokenAddress: string
  vesting: string
  idoPrice: number
  ido_network: string
  token_network: string
  total_raise: number
  round_data: any
  round_list: [] | any
  project_logo?: string
  telegram_link: string
  website_link: string
  x_link: string
  discord_link: string
  seedstage_status: string
  deposit_token: any
}

interface IIdentification {
  name: string
  iouSymbol?: any,
  iouTokenAddress?: any,
  img?: string
  telegram_link: string
  website_link: string
  x_link: string
  discord_link: string
}

interface IValuesInfo {
  idoPrice: number
  iouSymbol: string
  iouTokenAddress: string
  ido_network: string
  token_network: string
  total_raise: string
  deposit_token_symbol: string
}

export const MainArea = ({
  name,
  iouSymbol,
  iouTokenAddress,
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
  seedstage_status,
  deposit_token
}: IMainArea) => {
  const { set_current_round_id } = roundStore()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [currentRound, setCurrentRound] = useState({
    seedStageAddress: "0x629eb1db89c4709a9605fef86b09ec88f64540ad",
    roundId: "1",
    isWhitelistRound: true,
    minAllocationPerAddress: "10000",
    maxAllocationPerAddress: "10000000000000000000",
    startTime: "2024-05-04T07:48:38.000Z",
    endTime: "2024-05-15T21:35:18.000Z",
    raisedAmount: "0",
    createdAt: "2024-05-04T07:49:36.801Z",
    updatedAt: "2024-05-04T07:51:31.094Z",
    name: "seed 4 round 4",
    id: "6635e890e93a325a96f477c9"
  })

  const trueUTC = useCallback((_: string) => {
    return `${_}Z`
  }, [])

  const findCurrentRound = useCallback(() => {
    if (!round_data?.startTime || !round_data?.endTime) {
      setCurrentRound(round_list[0])
      set_current_round_id(round_list[0].roundId)
      return 
    }

    const now = new Date()
    let check = false
    for (let round of round_list) {
      const startTime = new Date(trueUTC(round?.startTime))
      const endTime = new Date(trueUTC(round?.endTime))

      const isInTimeRange = now >= startTime && now <= endTime
      if (isInTimeRange) {
        setCurrentRound(round)
        set_current_round_id(round.roundId)
        check = true
        break
      }
    }

    if (!check) {
      setCurrentRound(round_list[0])
      set_current_round_id(round_list[0].roundId)
    }
  }, [round_data?.end, round_data?.startTime, round_list, trueUTC])

  const calculateTimeLeft = useCallback(() => {
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (!currentRound?.endTime) return timeLeft

    const difference = +new Date(currentRound?.endTime) - +new Date()
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
    <div className='grid grid-cols-7 gap-6'>
      <div className='col-span-7 xl:col-span-4 relative rounded-[16px] overflow-hidden p-6'>
        <div className="absolute top-0 left-0 w-full h-full z-[1]">
          <Image src={ProjectBackground} alt='Project Background' className='w-full h-full object-cover'/>
        </div>
        <div className="relative z-[2] space-y-[21px]">
          <Identification
            name={name}
            img={project_logo}
            x_link={x_link}
            telegram_link={telegram_link}
            website_link={website_link}
            discord_link={discord_link}
          />
          <ValuesInfo
            idoPrice={idoPrice}
            iouSymbol={iouSymbol}
            iouTokenAddress={iouTokenAddress}
            ido_network={ido_network}
            token_network={token_network}
            total_raise={currentRound.raisedAmount}
            deposit_token_symbol={deposit_token.symbol}
          />
          {/* <VestingInfo vesting={vesting} /> */}

          {/* <div className='flex w-full justify-between items-center'>
            <p className='text-[#d65252]'>This pool requires Rookie tier</p>
            <Button size={'custom'} className='uppercase'>
              Stake more
            </Button>
          </div> */}
        </div>
      </div>
      <div className='col-span-7 xl:col-span-3 p-3 rounded-[8px] space-y-5'>
        <div className='hidden font-medium'>
          <p className='text-[#fcfcfd] text-[32px] leading-[40px] mt-1.5 font-bold'>
            {seedstage_status === 'open' ? (
              <>
                {timeLeft.days === 0 &&
                timeLeft.hours === 0 &&
                timeLeft.minutes === 0 &&
                timeLeft.seconds === 0 ? (
                  <>Round Ended</>
                ) : (
                  <>
                    <p className='text-center text-xs text-[#5b5b5b]'>
                      {currentRound?.name} Phase end in:
                    </p>
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
              </>
            ) : (
              <>{seedstage_status === 'upcoming' ? 'Upcoming' : 'Completed'}</>
            )}
          </p>
        </div>

        {/* <div className=''>
          <PhaseItem
            data={currentRound}
            isActive={true}
            switch_round={(currentRound: any) => {
              setCurrentRound(currentRound)
              set_current_round_id(currentRound.id)
            }}
          />
        </div> */}
        <div className='overflow-visible xl:overflow-y-scroll overflow-x-hidden h-full xl:max-h-[300px] space-y-2 custom-scrollbar'>
          {round_list?.map((round: any) => (
            <PhaseItem
              key={round.id}
              data={round}
              isActive={round.id === currentRound.id}
              switch_round={(currentRound: any) => {
                setCurrentRound(round)
                set_current_round_id(round.roundId)
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
  iouSymbol,
  iouTokenAddress,
  website_link,
  telegram_link,
  x_link,
  discord_link,
}: IIdentification) => {
  return (
    <div className='flex items-center'>
      {img ? (
        <div className="rounded-lg w-[90px] h-[90px] bg-[#272727] overflow-hidden">
          <img
            src={`${img}`}
            alt='pecland'
            className='object-cover object-center w-full h-full'
          />
        </div>
      ) : null}
      <div className={`w-[calc(100%-90px)] flex items-center justify-between ${img ? 'pl-6' : ''}`}>
        <div className='flex items-center gap-2'>
          <p className='text-[32px] font-bold text-[#e7e7e7]'>{name}</p>
          <Premium/>
        </div>

        <div className='flex items-center gap-2'>
          {website_link && (
            <div className='bg-primary rounded-full w-10 h-10 flex items-center justify-center'>
              <a href={website_link} target='_blank'>
                <Image
                  src={WebsiteIco}
                  alt='Website icon'
                  className='w-5 h-5'
                />
              </a>
            </div>
          )}
          {x_link && (
            <div className='bg-primary rounded-full w-10 h-10 flex items-center justify-center'>
              <a href={x_link} target='_blank'>
                <Image src={XIco} alt='X icon' className='w-5 h-5' />
              </a>
            </div>
          )}
          {telegram_link && (
            <div className='bg-primary rounded-full w-10 h-10 flex items-center justify-center'>
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
            <div className='bg-primary rounded-full w-10 h-10 flex items-center justify-center'>
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
  )
}

const ValuesInfo = ({
  idoPrice,
  ido_network,
  iouSymbol,
  iouTokenAddress,
  token_network,
  total_raise,
  deposit_token_symbol,
}: IValuesInfo) => {
  return (
    <div>
      <div className='px-3 py-5 rounded-[8px] grid grid-cols-4 gap-3'>
        <div className='pl-3 col-span-1 space-y-1.5'>
          <p className='text-xs font-semibold text-[#777E90]'>Token Price</p>
          <div className='flex items-center gap-2.5'>
            <p className='text-[#fcfcfd] text-[24px] leading-8 font-semibold'>{idoPrice}</p>
          </div>
        </div>
        <div className='pl-3 col-span-1 space-y-1.5'>
          <p className='text-xs font-semibold text-[#777E90]'>Total Raise</p>
          <div className='flex items-center gap-2.5'>
            <p className='text-[#fcfcfd] text-[24px] leading-8 font-semibold'>{total_raise}{` `}{deposit_token_symbol}</p>
          </div>
        </div>
        <div className='pl-3 col-span-1 space-y-1.5'>
          <p className='text-xs font-semibold text-[#777E90]'>Token Network</p>
          <div className='flex items-center gap-2.5'>
            <p className='text-[#fcfcfd] text-[24px] leading-8 font-semibold'>{token_network}</p>
          </div>
        </div>
        <div className='pl-3 col-span-1 space-y-1.5'>
          <p className='text-xs font-semibold text-[#777E90]'>IDO Network</p>
          <div className='flex items-center gap-2.5'>
            <p className='text-[#fcfcfd] text-[24px] leading-8 font-semibold'>{ido_network}</p>
          </div>
        </div>
      </div>
      <div className='bg-[#272727] rounded-md px-5 py-3 w-full text-sm font-bold text-[#bebebe] mt-2 text-center'>
       <span className='text-[#777E90]'>
         ${iouSymbol}:{' '}
        </span>
        <span className='text-balance text-[#e7e7e7]'>
          {iouTokenAddress}
        </span>
      </div>
    </div>
  )
}

const VestingInfo = ({ vesting }: { vesting: string }) => {
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
  const containerClass = isActive ? 'border-[#0DFFE2]' : 'border-[#3B3B3B]'
  const textColor = isActive ? 'text-[#CC2727]' : 'text-[#E7E7E7]'
  const roundText = data?.isWhitelistRound ? `${data?.name} - Whitelist Round` : `${data?.name} - Public Round` //`${data?.name} Round`
  const finalMessage =
    data?.isWhitelistRound
      ? 'Whitelist winner required'
      : 'Everyone can deposit'

  // console.log(123, data)

  return (
    <div
    className={`border rounded-[8px] p-2 mr-1 cursor-pointer ${containerClass}`}
      onClick={() => switch_round(data)}
    >
      <p className={`text-[#fcfcfd] text-[32px] leading-[40px] font-bold ${textColor} mb-4`}>{roundText}</p>
      <p className='text-sm font-medium pt-1 pb-1.5 text-[#B3B3B3]'>
        Start time: {new Date(data?.startTime).toLocaleString('vi-VN')}
      </p>
      <p className='text-sm font-medium pt-1 pb-1.5 text-[#B3B3B3]'>
        End time: {new Date(data?.endTime).toLocaleString('vi-VN')}
      </p>
      <p className='text-[#0DFE33] text-sm font-bold mt-5'>
        {finalMessage}
      </p>
    </div>
  )
}
