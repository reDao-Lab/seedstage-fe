import { createDirectus, rest, staticToken } from '@directus/sdk'

export const directus = createDirectus('https://api.b.army')
  .with(rest())
  .with(staticToken('-QNbixYKRQnu27R-BFYIukyHOFTWndnC'))

export const public_directus = createDirectus('https://api.b.army').with(rest())

export const merkleproof_directus = createDirectus('https://api.b.army')
  .with(rest())
  .with(staticToken('W8dya-E0bScbBVKWNu1Ldmp9gersyyEC'))
