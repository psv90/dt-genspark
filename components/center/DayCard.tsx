'use client';

import { Day } from '@types/journal';
import { Card, CardBody, CardHeader } from '@components/ui/Card';
import Button from '@components/ui/Button';
import { useJournalStore } from '@store/useJournalStore';
import { formatCurrency, formatDateNice } from '@utils/format';
import { useState } from 'react';
import EntryForm from './EntryForm';
import EntryList from './EntryList';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export default function DayCard({ day }: { day: Day }) {
  const removeDay = useJournalStore((s) => s.removeDay);
  const [open, setOpen] = useState(true);

  const amountColor =
    day.amount > 0 ? 'text-accent' : day.amount < 0 ? 'text-[#ff6b6b]' : 'text-gray-300';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <Card>
        <CardHeader className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className={clsx(
                'h-6 w-6 rounded-md bg-bg-3 border border-white/5 flex items-center justify-center text-gray-400 hover:text-gray-200'
              )}
              onClick={() => setOpen((v) => !v)}
              title={open ? 'Zwiń' : 'Rozwiń'}
            >
              {open ? '−' : '+'}
            </button>
            <div>
              <div className="text-[13px] leading-tight">{formatDateNice(day.date)}</div>
              <div className={clsx('text-[11px] leading-tight', amountColor)}>
                {formatCurrency(day.amount)}
              </div>
            </div>
          </div>
          <Button size="xs" variant="ghost" onClick={() => removeDay(day.id)}>Usuń dzień</Button>
        </CardHeader>
        {open && (
          <CardBody className="space-y-3">
            <EntryForm dayId={day.id} />
            <EntryList day={day} />
          </CardBody>
        )}
      </Card>
    </motion.div>
  );
}