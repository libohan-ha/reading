import { useState } from 'react';
import { AI_CONFIG } from '../constants/config';
import { getAIResponse } from '../utils/ai';

export function useAIResponse() {
  const [response, setResponse] = useState({ 
    text: '', 
    loading: false 
  });

  const generateResponse = async (bookContent, prompt, validateContent) => {
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