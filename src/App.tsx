import React from 'react';
import { Header } from './components/Header';
import { BookInput } from './components/BookInput';
import { PromptButtons } from './components/PromptButtons';
import { AIResponse } from './components/AIResponse';
import { useAIResponse } from './hooks/useAIResponse';
import { useBookContent } from './hooks/useBookContent';

function App() {
  const { content, updateContent, validateContent } = useBookContent();
  const { response, generateResponse } = useAIResponse();

  const handlePrompt = (prompt: string) => {
    generateResponse(content, prompt, validateContent);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="max-w-4xl mx-auto space-y-6">
          <BookInput
            value={content}
            onChange={updateContent}
            disabled={response.loading}
          />

          <PromptButtons 
            onPrompt={handlePrompt}
            disabled={response.loading}
          />

          <AIResponse response={response} />
        </div>
      </div>
    </div>
  );
}

export default App;