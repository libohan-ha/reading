const API_BASE_URL = 'https://api.deepseek.com/v1';

const config = {
  temperature: 1,
  max_tokens: 8192,
  model: "deepseek-chat",
};

export async function getAIResponse(bookContent: string, prompt: string): Promise<string> {
  try {
    console.log('Request parameters:', {
      prompt,
      bookContent,
      config
    });

    const response = await fetch(`${API_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: config.model,
        messages: [
          {
            role: "user",
            content: prompt + "\n\n书籍：" + bookContent
          }
        ],
        temperature: config.temperature,
        max_tokens: config.max_tokens,
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'API request failed');
    }

    const result = await response.json();
    const content = result.choices[0]?.message?.content;
    
    console.log('API Response:', content);

    if (!content) {
      throw new Error('Empty response from API');
    }

    return content;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}