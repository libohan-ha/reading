import React from 'react';
import { AIResponse as AIResponseType } from '../types';
import { BookOpen, Loader2 } from 'lucide-react';

interface Props {
  response: AIResponseType;
}

export function AIResponse({ response }: Props) {
  if (response.loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (response.error) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded-lg">
        <p>{response.error}</p>
      </div>
    );
  }

  if (!response.text) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-gray-500">
        <BookOpen className="w-12 h-12 mb-2" />
        <p>AI 分析将在这里显示</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md prose max-w-none">
      <div className="whitespace-pre-wrap">{response.text}</div>
    </div>
  );
}