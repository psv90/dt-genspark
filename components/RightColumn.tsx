'use client';

import { Card, CardBody, CardHeader } from './ui/Card';

export default function RightColumn() {
  return (
    <Card>
      <CardHeader>
        <div className="text-[11px] uppercase tracking-wider text-gray-400">Prawa kolumna</div>
      </CardHeader>
      <CardBody className="text-[13px] text-gray-400">
        Wkrótce dodamy nowe funkcje (statystyki, filtry, tagi, itp.).
      </CardBody>
    </Card>
  );
}