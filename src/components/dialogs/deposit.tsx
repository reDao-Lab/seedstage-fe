'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export const DepositDialog = ({
  open,
  onClose,
  onSubmit,
  min_allocation_amount,
  max_allocation_amount,
}: {
  open: boolean
  onClose: any
  onSubmit: any
  min_allocation_amount: any
  max_allocation_amount: any
}) => {
  const [input, setInput] = useState<number>()
  const [error, setError] = useState<any>(undefined)

  return (
    <Dialog open={open} onOpenChange={(_) => !_ && onClose?.()}>
      <DialogContent className='max-w-xl'>
        <DialogHeader>
          <DialogTitle className='text-3xl text-center text-[#e7e7e7]'>
            Deposit Token
          </DialogTitle>
        </DialogHeader>
        <div className='ant-modal-content'>
          <div className='ant-modal-body'>
            <div className='modal_info'>
              <div className='rounded-lg bg-neutral-900 px-3 py-3'>
                <div className=''>
                  <div className='grid w-full items-center gap-1.5'>
                    <Label htmlFor='dp-amount' className='text-[#e7e7e7] py-2'>
                      Enter deposit amount
                    </Label>
                    <Input
                      type='number'
                      id='dp-amount'
                      placeholder=''
                      value={input}
                      onChange={(_) => {
                        if (Number(_.target.value) < min_allocation_amount) {
                          return setError(
                            `Minimum allocation is ${min_allocation_amount}`,
                          )
                        }
                        if (Number(_.target.value) > max_allocation_amount) {
                          return setError(
                            `Maximum allocation is ${max_allocation_amount}`,
                          )
                        }
                        setError(undefined)
                        setInput(Number(_.target.value))
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {error && <div className='text-center'>{error}</div>}
          <div className='space-y-5 mt-5'>
            <div className='flex w-full justify-center'>
              <Button
                onClick={() => onSubmit(input)}
                disabled={error || Number(input) <= 0}
              >
                CONFIRM
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
