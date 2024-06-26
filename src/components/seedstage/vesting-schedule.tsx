export const VestingSchedule = () => {
  return (
    <div className='ido-box space-y-6'>
      <h2 className='text-[32px] leading-[40px] font-bold text-white uppercase pb-6 border-b border-[#3B3B3B]'>Profit Distribution History</h2>

      <div className='overflow-hidden'>
        <table className='table-auto xl:w-full space-y-1 border-separate border-spacing-y-1 w-full overflow-x-scroll'>
          <thead className=''>
            <tr className='text-[#5B5B5B] text-left bg-[#0A0A0A]'>
              <th className='font-medium py-3 pl-3 rounded-tl-md rounded-bl-md'>
                #
              </th>
              <th className='font-medium py-3'>Open (GMT+7)</th>
              <th className='font-medium py-3'>Percentage</th>
              <th className='font-medium py-3'>Amount</th>
              <th className='font-medium py-3'>Status</th>
              <th className='font-medium py-3 pr-3 rounded-tr-md rounded-br-md'>
                Claim Type
              </th>
            </tr>
          </thead>
          <tbody className='space-y-1'>
            <tr className='bg-[#0A0A0A] text-[#E7E7E7] text-left'>
              <td className='font-medium py-3 pl-3 rounded-tl-md rounded-bl-md'>
                1
              </td>
              <td className='font-medium py-3'>-------</td>
              <td className='font-medium py-3'>-----</td>
              <td className='font-medium py-3'>-----</td>
              <td className='font-medium py-3'>-----</td>
              <td className='font-medium py-3 pr-3 rounded-tr-md rounded-br-md'>
                ---------------
              </td>
            </tr>
            <tr className='bg-[#0A0A0A] text-[#E7E7E7] text-left'>
              <td className='font-medium py-3 pl-3 rounded-tl-md rounded-bl-md'>
                2
              </td>
              <td className='font-medium py-3'>-------</td>
              <td className='font-medium py-3'>-----</td>
              <td className='font-medium py-3'>-----</td>
              <td className='font-medium py-3'>-----</td>
              <td className='font-medium py-3 pr-3 rounded-tr-md rounded-br-md'>
                ---------------
              </td>
            </tr>
            <tr className='bg-[#0A0A0A] text-[#E7E7E7] text-left'>
              <td className='font-medium py-3 pl-3 rounded-tl-md rounded-bl-md'>
                3
              </td>
              <td className='font-medium py-3'>-------</td>
              <td className='font-medium py-3'>-----</td>
              <td className='font-medium py-3'>-----</td>
              <td className='font-medium py-3'>-----</td>
              <td className='font-medium py-3 pr-3 rounded-tr-md rounded-br-md'>
                ---------------
              </td>
            </tr>
            <tr className='bg-[#0A0A0A] text-[#E7E7E7] text-left'>
              <td className='font-medium py-3 pl-3 rounded-tl-md rounded-bl-md'>
                4
              </td>
              <td className='font-medium py-3'>-------</td>
              <td className='font-medium py-3'>-----</td>
              <td className='font-medium py-3'>-----</td>
              <td className='font-medium py-3'>-----</td>
              <td className='font-medium py-3 pr-3 rounded-tr-md rounded-br-md'>
                ---------------
              </td>
            </tr>
          </tbody>
        </table>

        {/* <div className='flex justify-between items-center mt-6'>
          <div className='flex justify-center items-center gap-1'>
            <div className='text-sm bg-[#E7E7E7] text-[#0A0A0A] leading-none rounded-md w-10 h-10 flex items-center justify-center'>
              1
            </div>
            <div className='text-sm bg-[#5B5B5B] text-[#E7E7E7] leading-none rounded-md w-10 h-10 flex items-center justify-center'>
              2
            </div>
            <div className='text-sm bg-[#5B5B5B] text-[#E7E7E7] leading-none rounded-md w-10 h-10 flex items-center justify-center'>
              3
            </div>
            <div className='text-sm bg-[#5B5B5B] text-[#E7E7E7] leading-none rounded-md w-10 h-10 flex items-center justify-center'>
              ...
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
