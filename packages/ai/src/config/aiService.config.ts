import { AIServiceConfig } from '../types';

export const aiServiceConfig: AIServiceConfig = {
  deepseek: {
    model: "deepseek-coder-33b-instruct",
    capabilities: [
      "code_generation",
      "code_completion",
      "code_explanation",
      "debugging",
      "refactoring"
    ],
    settings: {
      temperature: 0.7,
      top_p: 0.95,
      max_tokens: 2048
    }
  },
  huggingface: {
    models: {
      codeGen: "bigcode/starcoder-16b",
      translation: "facebook/m2m100-1.2B",
      analysis: "microsoft/codebert-base"
    },
    features: [
      "zero-shot-classification",
      "text-generation",
      "code-translation"
    ]
  },
  cohere: {
    model: "command-r-08-2024",
    features: {
      contextWindow: 128000,
      streamingSupport: true,
      customizablePrompts: true
    },
    applications: [
      "code_generation",
      "documentation",
      "analysis"
    ]
  }
};

export default aiServiceConfig;