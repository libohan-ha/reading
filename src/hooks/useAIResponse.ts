import { useState } from 'react';
import { getAIResponse } from '../utils/ai';
import { AIResponse } from '../types';
import { AI_CONFIG } from '../constants/config';

export function useAIResponse() {
  const [response, setResponse] = useState<AIResponse>({ 
    text: '', 
    loading: false 
  });

  const generateResponse = async (
    bookContent: string, 
    prompt: string,
    validateContent: (text: string) => string | null
  ) => {
    const error = validateContent(bookContent);
    if (error) {
      alert(error);
      return;
    }

    setResponse({ text: '', loading: true });
    try {
      const text = await getAIResponse(bookContent, prompt);
      setResponse({ text, loading: false });
    } catch (error) {
      setResponse({
        text: '',
        loading: false,
        error: AI_CONFIG.ERROR_MESSAGES.API_ERROR
      });
    }
  };

  return { response, generateResponse };
}