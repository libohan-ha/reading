import { useState } from 'react';
import { AI_CONFIG } from '../constants/config';

export function useBookContent() {
  const [content, setContent] = useState('');

  const validateContent = (text: string): string | null => {
    if (!text.trim()) {
      return AI_CONFIG.ERROR_MESSAGES.BOOK_NAME_REQUIRED;
    }
    return null;
  };

  const updateContent = (text: string) => {
    setContent(text);
  };

  return {
    content,
    updateContent,
    validateContent
  };
}