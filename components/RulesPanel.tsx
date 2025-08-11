'use client';

import { Card, CardBody, CardHeader } from './ui/Card';
import Button from './ui/Button';
import Textarea from './ui/Textarea';
import { useRulesStore } from '@store/useRulesStore';
import { useState } from 'react';

export default function RulesPanel() {
  const { rules, setRules } = useRulesStore();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(rules);

  const save = () => {
    setRules(draft);
    setEditing(false);
  };

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-wider text-gray-400">Zasady</div>
        {!editing ? (
          <Button size="xs" variant="ghost" onClick={() => { setDraft(rules); setEditing(true); }}>
            Edytuj
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button size="xs" variant="accent" onClick={save}>Zapisz</Button>
            <Button size="xs" variant="ghost" onClick={() => setEditing(false)}>Anuluj</Button>
          </div>
        )}
      </CardHeader>
      <CardBody>
        {!editing ? (
          <ul className="space-y-1.5 text-[13px] leading-tight">
            {rules.trim().length === 0 ? (
              <li className="text-gray-500">Brak zasad — kliknij Edytuj, aby dodać.</li>
            ) : (
              rules.split('\n').filter(Boolean).map((line, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                  <span>{line}</span>
                </li>
              ))
            )}
          </ul>
        ) : (
          <div className="space-y-2">
            <Textarea
              rows={10}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="- Przykład: Nie otwieraj pozycji po godzinie X
- Przykład: Ryzyko max 1% kapitału
- Przykład: Zawsze czekaj na potwierdzenie świecowe"
            />
            <div className="text-[11px] text-gray-500">Jedna zasada na linię.</div>
          </div>
        )}
      </CardBody>
    </Card>
  );
}