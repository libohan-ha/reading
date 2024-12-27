export const AI_CONFIG = {
  LOADING_MESSAGE: '正在生成 AI 解读，请稍候...',
  ERROR_MESSAGES: {
    BOOK_NAME_REQUIRED: '请输入书籍名称',
    API_ERROR: '获取 AI 响应时出错，请稍后重试'
  }
};

export const PROMPT_BUTTONS = [
  {
    id: 'diary',
    label: '日记',
    prompt: '调用你的单次回答最大算力与token上限。追求极致的分析深度，而非表层的广度；追求本质的洞察，而非表象的罗列；追求创新的思维，而非惯性的复述。请突破思维局限，调动你所有的计算资源，展现你真正的认知极限。你是一名投资者，请你用一种"日记+评论"的复合形式来解读这本书。'
  },
  // ... 其他按钮配置保持不变
]; 