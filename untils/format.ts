export function formatCurrency(value: number, currency: string = 'PLN', locale = 'pl-PL') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 2 }).format(value);
}

export function formatDateNice(dateISO: string, locale = 'pl-PL') {
  const d = new Date(dateISO + 'T00:00:00');
  return d.toLocaleDateString(locale, { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' });
}