import React from 'react';
import { Book } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <Book className="w-8 h-8 text-blue-600 mr-2" />
        <h1 className="text-3xl font-bold text-gray-900">AI 读书助手</h1>
      </div>
      <p className="text-gray-600">
        输入书籍名称，选择不同的解读方式，获取 AI 的深度分析
      </p>
    </header>
  );
}