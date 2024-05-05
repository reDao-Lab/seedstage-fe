'use client'
import * as React from 'react'

import payableToken from '@/abis/payableToken.json'
import poolSaleReDAO from '@/abis/poolSaleReDAO.json'
import roundStore from '@/store/roundStore'
import { getAccount, readContract } from '@wagmi/core'
import { ethers } from 'ethers'
import { useCallback } from 'react'
import { toast } from 'sonner'
import { useContractWrite, useNetwork, useQuery } from 'wagmi'
import { ConnectWalletAction } from '../connect-wallet-action'
import { DepositDialog } from '../dialogs/deposit'
import { Button } from '../ui/button'
import { Progress } from '../ui/progress'
interface IDepositArea {
  roundId: string
  seedStages: any
  round_list: any
  seedstage_status: string
}

interface IDepositData {
  merkle_proof: any
  seedstage_contract_address: any
  round_list: any
  current_round: any
  deposit_decimal: any
  min_allocation_amount: any
  max_allocation_amount: any
}

interface IApproveData {
  depositTokenInfo: any
  seedstage_contract_address: any
  max_allocation_per_address: any
  setState: (state: boolean) => void
}

const ArppoveToken = ({
  depositTokenInfo,
  seedstage_contract_address,
  max_allocation_per_address,
  setState,
}: IApproveData) => {
  const { data, isLoading, isSuccess, isError, error, write } =
    useContractWrite({
      address: depositTokenInfo?.tokenAddress,
      abi: payableToken,
      functionName: 'approve',
    })

  React.useEffect(() => {
    if (isSuccess) {
      setState(true)
      toast('Transaction successful!')
    }
    if (isError) {
      toast('Transaction failed!', {
        description: error?.message,
      })
    }
  }, [isSuccess, isError, setState, error?.message])

  const APPROVE_AMOUNT = ethers.parseUnits(
    String(max_allocation_per_address),
    depositTokenInfo?.decimals,
  )
  return (
    <Button
      size={'custom'}
      onClick={() =>
        write({
          args: [seedstage_contract_address, APPROVE_AMOUNT],
        })
      }
      className='uppercase'
      disabled={isLoading}
    >
      Approve USDT
    </Button>
  )
}

const Deposit = ({
  merkle_proof,
  seedstage_contract_address,
  round_list,
  current_round,
  deposit_decimal,
  min_allocation_amount,
  max_allocation_amount,
}: IDepositData) => {
  const [depositDialoOpen, setDepositDialogOpen] = React.useState(false)
  const index = round_list.indexOf(current_round)

  const { data, isLoading, isSuccess, isError, error, write } =
    useContractWrite({
      address: seedstage_contract_address,
      abi: poolSaleReDAO,
      functionName: 'deposit',
    })

  React.useEffect(() => {
    if (isSuccess) {
      toast('Transaction success')
      setDepositDialogOpen(false)
    }
    if (isError) {
      setDepositDialogOpen(false)
      toast('Transaction failed!', {
        description: error?.message,
      })
    }
  }, [isSuccess, isError, error?.message])

  const raw = merkle_proof
  const merkleProof = raw?.split('\n')

  const onClickConfirm = (enterAmount: any) => {
    const converted = ethers.parseUnits(enterAmount.toString(), deposit_decimal)
    write({
      args: [index, converted, merkleProof],
    })
  }

  return (
    <>
      <Button
        size={'custom'}
        onClick={() => {
          setDepositDialogOpen(true)
        }}
        className='uppercase'
        disabled={isLoading}
      >
        Deposit
      </Button>
      <DepositDialog
        open={depositDialoOpen}
        onClose={() => {
          setDepositDialogOpen(false)
        }}
        onSubmit={(amount: any) => {
          onClickConfirm(amount)
        }}
        min_allocation_amount={min_allocation_amount}
        max_allocation_amount={max_allocation_amount}
      />
    </>
  )
}

export const DepositArea = ({
  seedStages,
  round_list,
  roundId,
  seedstage_status,
}: IDepositArea) => {
  const account = getAccount()
  const network = useNetwork()
  const { current_round_id } = roundStore()
  const [current_round, set_current_round] = React.useState({
    start_time: '',
    end_time: '',
    min_allocation_per_address: 0,
    max_allocation_per_address: 0,
  })

  const [progressPercent, setProgressPercent] = React.useState(0)

  React.useEffect(() => {
    const round = round_list.find((r: any) => r.id === current_round_id)
    if (round) set_current_round(round)
  }, [current_round_id, round_list])

  const proofQuery = useQuery(
    [roundId, account.address],
    async () => {
      const res = await fetch(
        `/api/merkle-proof?account=${account.address}&round_id=${roundId}`,
      )
      return await res.json()
    },
    {
      enabled: !!roundId && !!account?.address,
    },
  )
  const merkle_proof = proofQuery.data?.data?.merkleProof

  const [deposited_amount, set_deposited_amount] = React.useState<any>(0)
  const [depositable, set_depositale] = React.useState<boolean>(false)
  const checkAllownce = useCallback(async () => {
    const allowance = await readContract({
      address: seedStages.depositTokenInfo?.tokenAddress,
      abi: payableToken,
      functionName: 'allowance',
      args: [account.address, seedStages?.seedstage_contract_address],
    })

    const deposit_decimals = seedStages.depositTokenInfo?.decimals
    const formated = allowance
      ? ethers.formatUnits(allowance.toString(), deposit_decimals)
      : 0
    if (Number(formated) >= current_round.min_allocation_per_address) {
      set_depositale(true)
    } else {
      set_depositale(false)
    }
  }, [account.address])

  const getUserDeposits = useCallback(async () => {
    const index = round_list.indexOf(current_round)
    if (index < 0) return
    const data = await readContract({
      address: seedStages?.seedstage_contract_address,
      abi: poolSaleReDAO,
      functionName: 'userDeposits',
      args: [Number(index), account.address],
    })
    if (!data) return set_deposited_amount(0)
    const deposit_decimals = seedStages.depositTokenInfo?.decimals
    const formated = ethers.formatUnits(data.toString(), deposit_decimals)
    if (Number(formated) > 0) {
      set_deposited_amount(Number(formated))
    }
  }, [current_round, account.address])

  const fetchRounds = useCallback(async () => {
    const index = round_list.indexOf(current_round)
    if (index < 0) return
    const data = await readContract({
      address: seedStages?.seedstage_contract_address,
      abi: poolSaleReDAO,
      functionName: 'rounds',
      args: [Number(index)],
    })
    // isWhitelistRound   bool :  true
    // allocation   uint256 :  100000000
    // minAllocationPerAddress   uint256 :  1000
    // maxAllocationPerAddress   uint256 :  10000
    // startTime   uint256 :  1708232400
    // endTime   uint256 :  1708750800
    // raisedAmount   uint256 :  10000
    // merkleRoot   bytes32 :  0x1f939414a52281de41ac3de9f11b78c723ee1ea98b0596be4b1d397db525f21a
    const currentValue = Object.values(data)[6]?.toString()
    const maxValue = Object.values(data)[1]?.toString()
    handleProgressChange(Number(currentValue), Number(maxValue))
  }, [current_round])
  // TADAAAAAAAAA
  const handleProgressChange = React.useCallback(
    (currentValue: number, maxValue: number) => {
      if (currentValue === 0) {
        setProgressPercent(0)
        return
      }
      setProgressPercent(
        Number(
          (
            (100 / maxValue) *
            (currentValue > maxValue ? maxValue : currentValue)
          ).toFixed(2),
        ),
      )
    },
    [],
  )

  React.useEffect(() => {
    if (!account.address || network?.chain?.id !== 42161) return
    getUserDeposits()
    checkAllownce()
    fetchRounds()
    const fetchRoundInterval = setInterval(() => {
      fetchRounds()
    }, 30 * 1000) // miliseconds
    return () => {
      clearInterval(fetchRoundInterval)
    }
  }, [
    account,
    getUserDeposits,
    checkAllownce,
    fetchRounds,
    network?.chain?.id,
    depositable,
    current_round,
  ])

  const renderActionButton = () => {
    if (seedstage_status === 'upcoming') {
      return (
        <Button size={'custom'} className='uppercase' disabled={true}>
          Upcoming
        </Button>
      )
    }
    if (seedstage_status === 'completed') {
      return (
        <Button size={'custom'} className='uppercase' disabled={true}>
          Completed
        </Button>
      )
    }
    if (round_list.indexOf(current_round) < 0) {
      return (
        <Button size={'custom'} className='uppercase' disabled={true}>
          Round Ended
        </Button>
      )
    }
    if (!account.address || network?.chain?.id !== 42161) {
      return <ConnectWalletAction />
    }
    if (deposited_amount > 0) {
      return (
        <Button size={'custom'} className='uppercase' disabled={true}>
          Deposited {deposited_amount} {seedStages?.project?.projectName}
        </Button>
      )
    }

    const current_start_time = current_round.start_time
    if (new Date(current_start_time).getTime() > Date.now()) {
      return (
        <Button size={'custom'} className='uppercase' disabled={true}>
          Upcoming
        </Button>
      )
    }
    const current_end_time = current_round.end_time
    if (new Date(current_end_time).getTime() < Date.now()) {
      return (
        <Button size={'custom'} className='uppercase' disabled={true}>
          Round Ended
        </Button>
      )
    }

    if (depositable) {
      return (
        <Deposit
          seedstage_contract_address={seedStages.seedstage_contract_address}
          round_list={round_list}
          current_round={current_round}
          merkle_proof={merkle_proof}
          deposit_decimal={seedStages.depositTokenInfo?.decimals}
          min_allocation_amount={current_round?.min_allocation_per_address}
          max_allocation_amount={current_round?.max_allocation_per_address}
        />
      )
    }

    return (
      <ArppoveToken
        depositTokenInfo={seedStages.depositTokenInfo}
        max_allocation_per_address={current_round.max_allocation_per_address}
        seedstage_contract_address={seedStages.seedstage_contract_address}
        setState={set_depositale}
      />
    )
  }

  return (
    <div className="ido-box">
      <h2 className='text-[32px] leading-[40px] font-bold text-white uppercase pb-6 border-b border-[#3B3B3B]'>Deposit</h2>

      <div className='flex w-full lg:items-center flex-col lg:flex-row justify-between gap-6 pt-6'>
        <div className=''>
          <div className="space-y-3">
            <div className='flex flex-col lg:flex-row w-full gap-3'>
              <p className='text-[#777E90] text-base'>Deposit token:</p>
              <p className='text-white line-clamp-1'>
                {seedStages?.project?.projectName} 
                ({seedStages?.depositTokenInfo?.tokenAddress})
              </p>
            </div>
            <div className='flex flex-col lg:flex-row w-full gap-3'>
              <p className='text-[#777E90] text-base'>Min allocation:</p>
              <p className='text-white line-clamp-1'>
                {current_round?.min_allocation_per_address}{' '}
                {seedStages?.project?.projectName}
              </p>
            </div>
            <div className='flex flex-col lg:flex-row w-full gap-3'>
              <p className='text-[#777E90] text-base'>Max allocation:</p>
              <p className='text-white line-clamp-1'>
                {current_round?.max_allocation_per_address}{' '}
                {seedStages?.project?.projectName}
              </p>
            </div>
          </div>
        </div>
        {renderActionButton()}
      </div>
      <div className='flex w-full justify-between items-center mt-6'>
        <Progress value={progressPercent} className='w-[95%] bg-[#888888]' />
        <div className='flex font-bold'>{progressPercent} %</div>
      </div>
    </div>
  )
}
