'use client';

import { useJournalStore } from '@store/useJournalStore';
import DayCard from './DayCard';
import { AnimatePresence, motion } from 'framer-motion';

export default function DayList() {
  const days = useJournalStore((s) => s.days);

  if (days.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[13px] text-gray-500 px-1"
      >
        Brak dni w dzienniku. Dodaj pierwszy dzień powyżej.
      </motion.div>
    );
  }

  return (
    <div className="space-y-3 md:space-y-4">
      <AnimatePresence initial={false}>
        {days.map((day) => (
          <DayCard key={day.id} day={day} />
        ))}
      </AnimatePresence>
    </div>
  );
}