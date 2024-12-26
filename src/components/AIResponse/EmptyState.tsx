import React from 'react';
import { BookOpen } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-gray-500">
      <BookOpen className="w-12 h-12 mb-2" />
      <p>AI 分析将在这里显示</p>
    </div>
  );
}