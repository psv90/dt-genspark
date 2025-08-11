'use client';

import { useState } from 'react';
import { Card, CardBody, CardHeader } from '@components/ui/Card';
import Input from '@components/ui/Input';
import Button from '@components/ui/Button';
import { useJournalStore } from '@store/useJournalStore';
import { fireConfetti } from '@lib/confetti';
import { getTodayISO } from '@utils/time';

export default function AddDayForm() {
  const addDay = useJournalStore((s) => s.addDay);
  const [date, setDate] = useState<string>(getTodayISO());
  const [amount, setAmount] = useState<string>('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(amount.replace(',', '.'));
    const num = Number.isFinite(val) ? val : 0;

    addDay({ date, amount: num });

    if (num > 0) {
      fireConfetti();
    }

    setAmount('');
  };

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-wider text-gray-400">Dodaj dzień</div>
      </CardHeader>
      <CardBody>
        <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div>
            <div className="text-[11px] mb-1 text-gray-400">Data</div>
            <Input type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <div className="text-[11px] mb-1 text-gray-400">Kwota (PLN)</div>
            <Input
              type="text"
              inputMode="decimal"
              placeholder="np. 150.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="self-end">
            <Button type="submit" className="w-full">Dodaj</Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}