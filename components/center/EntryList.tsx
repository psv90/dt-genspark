'use client';

import { Day, JournalEntry } from '@types/journal';
import Button from '@components/ui/Button';
import { useJournalStore } from '@store/useJournalStore';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

export default function EntryList({ day }: { day: Day }) {
  const removeEntry = useJournalStore((s) => s.removeEntry);

  if (day.entries.length === 0) {
    return <div className="text-[12px] text-gray-500">Brak wpisów.</div>;
  }

  return (
    <div className="space-y-2">
      <AnimatePresence initial={false}>
        {day.entries.map((entry: JournalEntry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="rounded-compact border border-white/5 bg-bg-3 p-2.5"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 items-center rounded bg-bg-2 px-1.5 text-[11px] text-gray-300 border border-white/5">
                  {entry.time}
                </span>
                <span className="text-[13px] text-gray-100">{entry.description}</span>
              </div>
              <Button size="xs" variant="ghost" onClick={() => removeEntry(day.id, entry.id)}>Usuń</Button>
            </div>

            {(entry.mistakes || entry.imageDataUrl) && (
              <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
                {entry.mistakes && (
                  <div className="md:col-span-2">
                    <div className="text-[11px] text-gray-400 mb-1">Błędy</div>
                    <div className="text-[13px] leading-snug text-gray-300 whitespace-pre-wrap">{entry.mistakes}</div>
                  </div>
                )}
                {entry.imageDataUrl && (
                  <div>
                    <div className="text-[11px] text-gray-400 mb-1">Wykres</div>
                    <a href={entry.imageDataUrl} target="_blank" rel="noreferrer">
                      <img
                        src={entry.imageDataUrl}
                        alt="Wykres"
                        className={clsx('rounded-compact border border-white/5 max-h-40 object-contain')}
                      />
                    </a>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}