import { create } from 'zustand';

interface ResetModalState {
  active: boolean;
  activate: () => void;
  deactivate: () => void;
}

const useResetModal = create<ResetModalState>(set => ({
  active: false,
  activate: () => set({ active: true }),
  deactivate: () => set({ active: false })
}));

export default useResetModal;
