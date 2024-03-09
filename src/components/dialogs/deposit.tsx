'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export const DepositDialog = ({ open ,onClose, onSubmit } : { open: boolean, onClose:any, onSubmit:any }) => {
  const [input, setInput] = useState<number>(0)

  return (
    <Dialog open={open} onOpenChange={(_ => !_ && onClose?.())}>
      <DialogContent className='max-w-xl'>
        <DialogHeader>
          <DialogTitle className='text-3xl'>Deposit Token</DialogTitle>
        </DialogHeader>
        <div className='ant-modal-content'>
          <div className='ant-modal-body'>
            <div className='modal_info'>
              <div className='rounded-lg bg-neutral-900 pl-4 pr-2 py-3'>
                <div className=''>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="dp-amount">Enter deposit amount</Label>
                  <Input type="number" id="dp-amount" placeholder="Deposit amount" value={0} onChange={(_)=>setInput(Number(_.target.value))} />
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-5 mt-5'>
            <div className='flex w-full justify-center'>
              <Button onClick={onSubmit} disabled={Number(input)<=0}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
