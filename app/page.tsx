'use client';

import RulesPanel from '@components/RulesPanel';
import RightColumn from '@components/RightColumn';
import AddDayForm from '@components/center/AddDayForm';
import DayList from '@components/center/DayList';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="min-h-screen text-gray-200">
      <header className="sticky top-0 z-20 border-b border-white/5 bg-bg/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-3 flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="h-5 w-5" />
          <div className="text-sm uppercase tracking-widest text-gray-400">Dziennik Tradera</div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-4 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_300px] gap-3 md:gap-4">
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:sticky lg:top-[68px] self-start"
          >
            <RulesPanel />
          </motion.aside>

          <section className="space-y-3 md:space-y-4">
            <AddDayForm />
            <DayList />
          </section>

          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="lg:sticky lg:top-[68px] self-start"
          >
            <RightColumn />
          </motion.aside>
        </div>
      </main>
    </div>
  );
}