'use client'
import * as React from 'react'

import payableToken from '@/abis/payableToken.json'
import poolSaleReDAO from '@/abis/poolSaleReDAO.json'
import roundStore from '@/store/roundStore'
import { getAccount } from '@wagmi/core'
import { ethers } from 'ethers'
import { toast } from 'sonner'
import { useContractRead, useContractWrite, useQuery } from 'wagmi'
import { ConnectWalletAction } from '../connect-wallet-action'
import { DepositDialog } from '../dialogs/deposit'
import { Button } from '../ui/button'
import { Progress } from '../ui/progress'
interface IDepositArea {
  roundId: string
  seedStages: any
  round_index: any
  round_list: any
}

interface IDepositData {
  merkle_proof: any
  seedstage_contract_address: any
  round_index: any
}

interface IApproveData {
  deposit_token: any
  seedstage_contract_address: any
  max_allocation_per_address: any
  setState: (state: boolean) => void
}

const ArppoveToken = ({
  deposit_token,
  seedstage_contract_address,
  max_allocation_per_address,
  setState,
}: IApproveData) => {
  const { data, isLoading, isSuccess, isError, error, write } =
    useContractWrite({
      address: deposit_token.token_address,
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
    deposit_token.decimal,
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
  round_index,
}: IDepositData) => {
  const [depositDialoOpen, setDepositDialogOpen] = React.useState(false)

  const { data, isLoading, isSuccess, isError, error, write } =
    useContractWrite({
      address: seedstage_contract_address,
      abi: poolSaleReDAO,
      functionName: 'deposit',
    })

  React.useEffect(() => {
    if (isSuccess) {
      toast('Transaction success')
    }
    if (isError) {
      toast('Transaction failed!', {
        description: error?.message,
      })
    }
  }, [isSuccess, isError, error?.message])

  const roundIdex = round_index
  const amount = 10000
  const raw = merkle_proof
  const merkleProof = raw.split('\n')
  return (
    <>
      <Button
        size={'custom'}
        // onClick={() =>
        //   write({
        //     args: [roundIdex, amount, merkleProof],
        //   })
        // }
        onClick={()=>{
          setDepositDialogOpen(true)
        }}
        className='uppercase'
        disabled={isLoading}
        >
        Deposit
      </Button>
      <DepositDialog open={depositDialoOpen} onClose={()=>{setDepositDialogOpen(false)}} onSubmit={()=>{setDepositDialogOpen(false)}}/>
    </>
  )
}

export const DepositArea = ({
  seedStages,
  round_index,
  round_list,
  roundId,
}: IDepositArea) => {
  const account = getAccount()
  const { current_round_id, set_current_round_id } = roundStore()

  const [current_round, set_current_round] = React.useState({
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
        `/api/merkle-proof?account=${account.address}&round_id=${roundId}`)
      return await res.json()
    },
    {
      enabled: !!roundId && !!account?.address,
    },
  )
  const merkle_proof = proofQuery.data?.data?.merkleProof

  const [depositable, setstate] = React.useState<boolean>(false)
  const { data: allowance, refetch } = useContractRead({
    address: seedStages.deposit_token.token_address,
    abi: payableToken,
    functionName: 'allowance',
    args: [account.address, seedStages?.seedstage_contract_address],
  })

  const deposit_decimals = seedStages.deposit_token.decimal
  const formated = allowance
    ? ethers.formatUnits(allowance, deposit_decimals)
    : 0

  // TADAAAAAAAAA
  const handleProgressChange = React.useCallback((currentValue : number, maxValue : number) => {
    setProgressPercent(100/maxValue*(currentValue>maxValue?maxValue:currentValue))
  },[])

  React.useEffect(() => {
    if (Number(formated) >= round_list.max_allocation_per_address) {
      setstate(true)
    }
  }, [formated, round_list.max_allocation_per_address])

  return (
    <div className='ido-box flex w-full lg:items-center flex-col lg:flex-row justify-between gap-6'>
      <div className='space-y-3'>
        <h2 className='text-xl text-[#e7e7e7] uppercase'>Deposit</h2>
        <div className='flex flex-col lg:flex-row w-full gap-3'>
          <p className='text-[#b3b3b3] text-base'>Deposit token:</p>
          <p className='text-[#cc2727] line-clamp-1'>
            {seedStages?.deposit_token.name} (
            {seedStages?.deposit_token.token_address})
          </p>
        </div>
        <div className='flex flex-col lg:flex-row w-full gap-3'>
          <p className='text-[#b3b3b3] text-base'>Min allocation:</p>
          <p className='text-[#cc2727] line-clamp-1'>
            {current_round?.min_allocation_per_address}{' '}
            {seedStages?.deposit_token.name}
          </p>
        </div>
        <div className='flex flex-col lg:flex-row w-full gap-3'>
          <p className='text-[#b3b3b3] text-base'>Max allocation:</p>
          <p className='text-[#cc2727] line-clamp-1'>
            {current_round?.max_allocation_per_address}{' '}
            {seedStages?.deposit_token.name}
          </p>
        </div>

        <Progress value={progressPercent} className="w-full" />
      </div>
      {!account.address ? (
        <ConnectWalletAction />
      ) : (
        <>
          {depositable ? (
            <Deposit
              seedstage_contract_address={seedStages.seedstage_contract_address}
              round_index={round_index}
              merkle_proof={merkle_proof}
            />
          ) : (
            <ArppoveToken
              deposit_token={seedStages.deposit_token}
              max_allocation_per_address={
                current_round.max_allocation_per_address
              }
              seedstage_contract_address={seedStages.seedstage_contract_address}
              setState={setstate}
            />
          )}
        </>
      )}
    </div>
  )
}
