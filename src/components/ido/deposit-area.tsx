'use client'
import * as React from 'react'

import { Button } from '../ui/button'
import { useContractRead, useContractWrite, useQuery } from 'wagmi'
import payableToken from '@/abis/payableToken.json'
import poolSaleReDAO from '@/abis/poolSaleReDAO.json'
import { ethers } from 'ethers'
import { toast } from 'sonner'
import { getAccount } from '@wagmi/core'
import { ConnectWalletAction } from '../connect-wallet-action'
interface IDepositArea {
  roundId: string
  seedStages: any
  round_index: any
  round_data: any
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
      address: deposit_token,
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
  }, [isSuccess, isError])

  const APPROVE_AMOUNT = ethers.parseUnits(
    max_allocation_per_address.toString(),
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
  }, [isSuccess, isError])

  const roundIdex = round_index
  const amount = 10000
  const raw = merkle_proof
  const merkleProof = raw.split('\n')
  return (
    <Button
      size={'custom'}
      onClick={() =>
        write({
          args: [roundIdex, amount, merkleProof],
        })
      }
      className='uppercase'
      disabled={isLoading}
    >
      Deposit
    </Button>
  )
}

export const DepositArea = ({
  seedStages,
  round_index,
  round_data,
  roundId,
}: IDepositArea) => {
  const account = getAccount()
  const proofQuery = useQuery(
    [roundId, account.address],
    () => {
      return fetch(
        `/api/merkle-proof?account=${account.address}&round_id=${roundId}`,
      ).then((res) => res.json())
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

  React.useEffect(() => {
    if (Number(formated) >= round_data.max_allocation_per_address) {
      setstate(true)
    }
  }, [allowance])

  return (
    <div className='ido-box flex w-full lg:items-center flex-col lg:flex-row justify-between gap-6'>
      <div className='space-y-3'>
        <h2 className='text-xl text-[#e7e7e7] uppercase'>Deposit</h2>
        <div className='flex flex-col lg:flex-row w-full gap-3'>
          <p className='text-[#b3b3b3] text-base'>Smart Contract:</p>
          <p className='text-[#cc2727] line-clamp-1'>
            {seedStages?.seedstage_contract_address}
          </p>
        </div>
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
            {round_data?.min_allocation_per_address}{' '}
            {seedStages?.deposit_token.name}
          </p>
        </div>
        <div className='flex flex-col lg:flex-row w-full gap-3'>
          <p className='text-[#b3b3b3] text-base'>Max allocation:</p>
          <p className='text-[#cc2727] line-clamp-1'>
            {round_data?.max_allocation_per_address}{' '}
            {seedStages?.deposit_token.name}
          </p>
        </div>
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
              deposit_token={seedStages.deposit_token.token_address}
              max_allocation_per_address={round_data.max_allocation_per_address}
              seedstage_contract_address={seedStages.seedstage_contract_address}
              setState={setstate}
            />
          )}
        </>
      )}
    </div>
  )
}
