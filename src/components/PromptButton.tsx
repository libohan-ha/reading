import React from 'react';
import { PromptButton as PromptButtonType } from '../types';

interface Props {
  button: PromptButtonType;
  onClick: (prompt: string) => void;
  disabled: boolean;
}

export function PromptButton({ button, onClick, disabled }: Props) {
  return (
    <button
      onClick={() => onClick(button.prompt)}
      disabled={disabled}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors
                 shadow-md hover:shadow-lg"
    >
      {button.label}
    </button>
  );
}