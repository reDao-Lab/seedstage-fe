import { create } from 'zustand'

type voidFunc = (...prop: any) => void

type TUserStore = {
  data: any
  loading: boolean
  error: any
  login: (status: boolean, onSuccess?: voidFunc) => void
}

let initData = {
  id: '',
  isLogin: false,
}

const userStore = create<TUserStore>((set: any) => ({
  data: initData,
  loading: true,
  error: null,
  login: async (status: boolean, onSuccess?: voidFunc) => {
    await set((_: any) => ({
      data: { ..._.data, isLogin: status },
      loading: true,
      error: null,
    }))
  },
}))

export default userStore
