import { create } from 'zustand'

type TRoundStore = {
  current_round_id: string
  set_current_round_id: (id: string) => void
}

const userStore = create<TRoundStore>((set: any) => ({
  current_round_id: '',
  set_current_round_id: async (id: string) => {
    await set((_: any) => ({
      current_round_id: id,
    }))
  },
}))

export default userStore
