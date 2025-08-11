export type JournalEntry = {
  id: string;
  time: string; // HH:mm
  description: string;
  mistakes: string;
  imageDataUrl?: string;
};

export type Day = {
  id: string;
  date: string; // YYYY-MM-DD
  amount: number;
  entries: JournalEntry[];
};

export type NewDay = {
  date: string;
  amount: number;
};

export type NewEntry = {
  time: string;
  description: string;
  mistakes?: string;
  imageDataUrl?: string;
};