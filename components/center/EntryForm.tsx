'use client';

import Input from '@components/ui/Input';
import Textarea from '@components/ui/Textarea';
import Button from '@components/ui/Button';
import { useJournalStore } from '@store/useJournalStore';
import { useState } from 'react';
import { getNowHM } from '@utils/time';

export default function EntryForm({ dayId }: { dayId: string }) {
  const addEntry = useJournalStore((s) => s.addEntry);

  const [time, setTime] = useState(getNowHM());
  const [description, setDescription] = useState('');
  const [mistakes, setMistakes] = useState('');
  const [imageDataUrl, setImageDataUrl] = useState<string | undefined>(undefined);

  const onFileChange = async (file?: File | null) => {
    if (!file) {
      setImageDataUrl(undefined);
      return;
    }
    const dataUrl = await fileToDataUrl(file);
    setImageDataUrl(dataUrl);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!time || !description.trim()) return;

    addEntry(dayId, { time, description, mistakes, imageDataUrl });
    // reset
    setTime(getNowHM());
    setDescription('');
    setMistakes('');
    setImageDataUrl(undefined);
  };

  return (
    <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-4 gap-2">
      <div>
        <div className="text-[11px] mb-1 text-gray-400">Godzina</div>
        <Input type="time" required value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div className="sm:col-span-3">
        <div className="text-[11px] mb-1 text-gray-400">Opis sytuacji</div>
        <Textarea rows={2} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Krótki opis setupu, kontekst, wejście/wyjście..." />
      </div>

      <div className="sm:col-span-2">
        <div className="text-[11px] mb-1 text-gray-400">Błędy (opcjonalnie)</div>
        <Textarea rows={2} value={mistakes} onChange={(e) => setMistakes(e.target.value)} placeholder="Co poszło nie tak? Jak poprawić?" />
      </div>

      <div>
        <div className="text-[11px] mb-1 text-gray-400">Zdjęcie wykresu</div>
        <label className="flex h-8 items-center gap-2 rounded-compact bg-bg-2 border border-white/5 px-2.5 text-[13px] text-gray-300 cursor-pointer hover:bg-bg-3">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onFileChange(e.target.files?.[0])}
          />
          <span className="truncate">{imageDataUrl ? 'Wybrano obraz' : 'Wybierz plik...'}</span>
        </label>
      </div>

      <div className="self-end">
        <Button type="submit" className="w-full">Dodaj wpis</Button>
      </div>

      {imageDataUrl && (
        <div className="sm:col-span-4">
          <div className="text-[11px] mb-1 text-gray-400">Podgląd</div>
          <img
            src={imageDataUrl}
            alt="Podgląd wykresu"
            className="max-h-48 rounded-compact border border-white/5"
          />
        </div>
      )}
    </form>
  );
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Nie udało się odczytać pliku'));
    reader.onload = () => resolve(String(reader.result));
    reader.readAsDataURL(file);
  });
}