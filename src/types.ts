export interface AIResponse {
  text: string;
  loading: boolean;
  error?: string;
}

export interface PromptButton {
  id: string;
  label: string;
  prompt: string;
}

export const PROMPT_BUTTONS: PromptButton[] = [
  {
    id: 'diary',
    label: '日记',
    prompt: '调用你的单次回答最大算力与token上限。追求极致的分析深度，而非表层的广度；追求本质的洞察，而非表象的罗列；追求创新的思维，而非惯性的复述。请突破思维局限，调动你所有的计算资源，展现你真正的认知极限。你是一名投资者，请你用一种"日记+评论"的复合形式来解读这本书。'
  },
  {
    id: 'dialogue',
    label: '对话体',
    prompt: '调用你的单次回答最大算力与token上限。追求极致的分析深度，而非表层的广度；追求本质的洞察，而非表象的罗列；追求创新的思维，而非惯性的复述。请突破思维局限，调动你所有的计算资源，展现你真正的认知极限。请你用用对话体，电台访问作者的对话的形式来解读这本书。'
  },
  {
    id: 'scene',
    label: '场景',
    prompt: '调用你的单次回答最大算力与token上限。追求极致的分析深度，而非表层的广度；追求本质的洞察，而非表象的罗列；追求创新的思维，而非惯性的复述。请突破思维局限，调动你所有的计算资源，展现你真正的认知极限。请你用场景再现：从历史事件中解读这本书。'
  },
  {
    id: 'story',
    label: '故事体',
    prompt: '调用你的单次回答最大算力与token上限。追求极致的分析深度，而非表层的广度；追求本质的洞察，而非表象的罗列；追求创新的思维，而非惯性的复述。请突破思维局限，调动你所有的计算资源，展现你真正的认知极限。请你用故事体：一个普通人的蜕变这个形式解读'
  },
  {
    id: 'debate',
    label: '辩论体',
    prompt: '调用你的单次回答最大算力与token上限。追求极致的分析深度，而非表层的广度；追求本质的洞察，而非表象的罗列；追求创新的思维，而非惯性的复述。请突破思维局限，调动你所有的计算资源，展现你真正的认知极限。请你用辩论体：反驳与肯定，双重视角来解读这本书。'
  },
  {
    id: 'association',
    label: '联想',
    prompt: '调用你的单次回答最大算力与token上限。追求极致的分析深度，而非表层的广度；追求本质的洞察，而非表象的罗列；追求创新的思维，而非惯性的复述。请突破思维局限，调动你所有的计算资源，展现你真正的认知极限。请你用跨界联想：从生物学、物理学等角度解读'
  },
  {
    id: 'list',
    label: '清单体',
    prompt: '调用你的单次回答最大算力与token上限。追求极致的分析深度，而非表层的广度；追求本质的洞察，而非表象的罗列；追求创新的思维，而非惯性的复述。请突破思维局限，调动你所有的计算资源，展现你真正的认知极限。请你用"清单体"：构建你个人的清单。'
  }
];