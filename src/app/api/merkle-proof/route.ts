import { merkleproof_directus } from '@/lib/directus'
import { readItems } from '@directus/sdk'
import { NextResponse } from 'next/server'
import z from 'zod'

const QueryParamsSchema = z.object({
  round_id: z.string(),
  account: z.string(),
})

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const queryParsed = QueryParamsSchema.safeParse({
      round_id: url.searchParams.get('round_id'),
      account: url.searchParams.get('account'),
    })
    if (!queryParsed.success) {
      throw queryParsed.error
    }

    const { round_id, account } = queryParsed.data
    const [proof] = await merkleproof_directus.request(
      readItems('seedstage_round_merkleproofs', {
        filter: {
          seedstage_round_id: round_id,
          evm_address: account,
        },
        limit: 1,
      }),
    )

    return NextResponse.json({
      success: true,
      data: proof ?? null,
    })
  } catch (ex) {
    const errMsg = ex instanceof Error ? ex.message : 'Unknown error'
    return NextResponse.json({
      success: false,
      error: errMsg,
    })
  }
}
