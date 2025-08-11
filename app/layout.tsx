import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dziennik Tradera',
  description: 'Modułowy dziennik tradera — Next.js + Tailwind, lokalny zapis, animacje.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}