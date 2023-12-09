import create from 'zustand'

type ModalStore = {
  workVisible: boolean
  toggleWorkVisible: () => void
  contactVisible: boolean
  toggleContactVisible: () => void
  aboutVisible: boolean
  toggleAboutVisible: () => void
  gameVisible: boolean
  toggleGameVisible: () => void
  profileVisible: boolean
  toggleProfileVisible: () => void
  skillsVisible: boolean
  toggleSkillsVisible: () => void
  tipjarVisible: boolean
  toggleTipjarVisible: () => void
  walletOptionsVisible: boolean
  toggleWalletOptionsVisible: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
  workVisible: false,
  toggleWorkVisible: () =>
    set((state) => ({ workVisible: !state.workVisible })),
  contactVisible: false,
  toggleContactVisible: () =>
    set((state) => ({ contactVisible: !state.contactVisible })),
  aboutVisible: false,
  toggleAboutVisible: () =>
    set((state) => ({ aboutVisible: !state.aboutVisible })),
  gameVisible: false,
  toggleGameVisible: () =>
    set((state) => ({ gameVisible: !state.gameVisible })),
  profileVisible: false,
  toggleProfileVisible: () =>
    set((state) => ({ profileVisible: !state.profileVisible })),
  skillsVisible: false,
  toggleSkillsVisible: () =>
    set((state) => ({ skillsVisible: !state.skillsVisible })),
  tipjarVisible: false,
  toggleTipjarVisible: () =>
    set((state) => ({ tipjarVisible: !state.tipjarVisible })),
  walletOptionsVisible: false,
  toggleWalletOptionsVisible: () =>
    set((state) => ({ walletOptionsVisible: !state.walletOptionsVisible })),
}))
