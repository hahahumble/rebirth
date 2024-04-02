import { create } from 'zustand';

export interface ShareInfo {
  count: number;
  region: string;
  category: string;
  gender: string;
  order: string;
  probability: number;
}

interface ShareModalState {
  active: boolean;
  shareInfo: ShareInfo;
  activate: () => void;
  deactivate: () => void;
  setShareInfo: (info: ShareInfo) => void;
}

const useShareModal = create<ShareModalState>(set => ({
  active: false,
  shareInfo: {
    count: 0,
    region: '',
    category: '',
    gender: '',
    order: '',
    probability: 0
  },
  activate: () => set({ active: true }),
  deactivate: () => set({ active: false }),
  setShareInfo: (info: ShareInfo) => set({ shareInfo: info })
}));

export default useShareModal;
