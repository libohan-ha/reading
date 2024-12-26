import React from 'react';
import { AlertCircle } from 'lucide-react';

interface Props {
  error: string;
}

export function ErrorState({ error }: Props) {
  return (
    <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center">
      <AlertCircle className="w-5 h-5 mr-2" />
      <p>{error}</p>
    </div>
  );
}