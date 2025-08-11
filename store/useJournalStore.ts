'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Day, JournalEntry, NewDay, NewEntry } from '@types/journal';
import { nanoid } from 'nanoid';

type JournalState = {
  days: Day[];
  addDay: (data: NewDay) => void;
  removeDay: (dayId: string) => void;
  addEntry: (dayId: string, data: NewEntry) => void;
  removeEntry: (dayId: string, entryId: string) => void;
};

export const useJournalStore = create<JournalState>()(
  persist(
    (set, get) => ({
      days: [],
      addDay: (data) =>
        set((state) => ({
          days: [
            { id: nanoid(), date: data.date, amount: data.amount, entries: [] },
            ...state.days
          ]
        })),
      removeDay: (dayId) =>
        set((state) => ({
          days: state.days.filter((d) => d.id !== dayId)
        })),
      addEntry: (dayId, data) =>
        set((state) => ({
          days: state.days.map((d) =>
            d.id === dayId
              ? {
                  ...d,
                  entries: [
                    {
                      id: nanoid(),
                      time: data.time,
                      description: data.description,
                      mistakes: data.mistakes || '',
                      imageDataUrl: data.imageDataUrl
                    } as JournalEntry,
                    ...d.entries
                  ]
                }
              : d
          )
        })),
      removeEntry: (dayId, entryId) =>
        set((state) => ({
          days: state.days.map((d) =>
            d.id === dayId ? { ...d, entries: d.entries.filter((e) => e.id !== entryId) } : d
          )
        }))
    }),
    {
      name: 'trader-journal',
      storage: createJSONStorage(() => localStorage),
      version: 1
    }
  )
);