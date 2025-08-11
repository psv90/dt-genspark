'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type RulesState = {
  rules: string;
  setRules: (value: string) => void;
};

export const useRulesStore = create<RulesState>()(
  persist(
    (set) => ({
      rules: '',
      setRules: (rules) => set({ rules })
    }),
    {
      name: 'trader-journal-rules',
      storage: createJSONStorage(() => localStorage),
      version: 1
    }
  )
);