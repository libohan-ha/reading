import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": import.meta.env.VITE_APP_URL,
    "X-Title": "ReadAI",
  },
  dangerouslyAllowBrowser: true
});

export async function getAIResponse(bookContent: string, prompt: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-thinking-exp:free",
      messages: [
        {
          role: "user",
          content: prompt + "\n\n书籍：" + bookContent
        }
      ]
    });

    return completion.choices[0].message.content || '无响应';
  } catch (error) {
    console.error('Error calling AI API:', error);
    throw new Error(getErrorMessage(error));
  }
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    // 检查特定的API错误
    if (error.message.includes('invalid_request_error')) {
      return '输入内容无效，请重试';
    }
    if (error.message.includes('authentication_error')) {
      return 'API 密钥无效或已过期';
    }
    if (error.message.includes('quota_exceeded')) {
      return 'API 配额已用完，请稍后重试';
    }
    return error.message;
  }
  return '发生未知错误，请稍后重试';
}