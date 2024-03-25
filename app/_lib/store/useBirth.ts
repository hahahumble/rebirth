import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { BirthResult } from '@/lib/rebirth';

interface BirthState {
  birthResults: BirthResult[];
  addBirthResult: (result: BirthResult) => void;
  getLatestBirthResult: () => BirthResult | null;
  getBirthResultsCount: () => number;
  clearBirthResults: () => void;
}

export const useBirth = create<BirthState>()(
  persist(
    (set, get) => ({
      birthResults: [],
      addBirthResult: (result: BirthResult) =>
        set((state: BirthState) => ({
          birthResults: [...state.birthResults, result]
        })),
      getLatestBirthResult: () => {
        const birthResults = get().birthResults;
        return birthResults.length > 0
          ? birthResults[birthResults.length - 1]
          : null;
      },
      getBirthResultsCount: () => {
        return get().birthResults.length;
      },
      clearBirthResults: () => {
        set({ birthResults: [] });
      }
    }),
    {
      name: 'birth-storage',
      skipHydration: true,
      storage: createJSONStorage(() => localStorage)
    }
  )
);
