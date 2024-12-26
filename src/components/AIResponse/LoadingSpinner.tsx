import React from 'react';
import { Loader2 } from 'lucide-react';
import { AI_CONFIG } from '../../constants/config';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="w-8 h-8 animate-spin text-blue-600 mr-2" />
      <span className="text-gray-600">{AI_CONFIG.LOADING_MESSAGE}</span>
    </div>
  );
}