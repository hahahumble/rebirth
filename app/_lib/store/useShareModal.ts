import { create } from 'zustand';

interface ShareModalState {
  active: boolean;
  activate: () => void;
  deactivate: () => void;
}

const useShareModal = create<ShareModalState>(set => ({
  active: false,
  activate: () => set({ active: true }),
  deactivate: () => set({ active: false })
}));

export default useShareModal;
