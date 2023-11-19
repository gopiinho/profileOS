// modalStore.js
import create from 'zustand'

type ModalStore = {
  contactVisible: boolean
  toggleContactVisible: () => void
  aboutVisible: boolean
  toggleAboutVisible: () => void
  gameVisible: boolean
  toggleGameVisible: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
  contactVisible: false,
  toggleContactVisible: () =>
    set((state) => ({ contactVisible: !state.contactVisible })),
  aboutVisible: false,
  toggleAboutVisible: () =>
    set((state) => ({ aboutVisible: !state.aboutVisible })),
  gameVisible: false,
  toggleGameVisible: () =>
    set((state) => ({ gameVisible: !state.gameVisible })),
}))
