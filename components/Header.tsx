
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

export const Header: React.FC = () => {
  return (
    <header className="text-center my-8">
      <div className="flex items-center justify-center space-x-3 mb-2">
        <SparklesIcon className="h-10 w-10 text-sky-500 dark:text-sky-400" />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-800 to-black dark:from-slate-200 dark:via-slate-300 dark:to-slate-400">
          Sales Call Analyzer (TH)
        </h1>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-lg">
        วิเคราะห์การสนทนาการขายด้วย AI เพื่อเพิ่มโอกาสปิดการขายของคุณ
      </p>
    </header>
  );
};