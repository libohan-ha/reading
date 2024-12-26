import React from 'react';
import { PromptButton } from './PromptButton';
import { PROMPT_BUTTONS } from '../types';

interface Props {
  onPrompt: (prompt: string) => void;
  disabled: boolean;
}

export function PromptButtons({ onPrompt, disabled }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {PROMPT_BUTTONS.map((button) => (
        <PromptButton
          key={button.id}
          button={button}
          onClick={onPrompt}
          disabled={disabled}
        />
      ))}
    </div>
  );
}