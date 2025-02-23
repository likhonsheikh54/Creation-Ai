import { HfInference } from "@huggingface/inference";

export const modelConfig = {
  inference: {
    apiKey: process.env.HF_API_KEY,
    defaultModel: "deepseek-ai/deepseek-coder-33b-instruct",
    timeout: 30000,
  },
  models: {
    codeGeneration: {
      model: "bigcode/starcoder",
      temperature: 0.7,
      maxLength: 2048,
    },
    codeCompletion: {
      model: "codellama/CodeLlama-34b-Instruct",
      temperature: 0.5,
      maxLength: 1024,
    },
    analysis: {
      model: "microsoft/codebert-base",
    },
  },
  pipeline: {
    streaming: true,
    caching: {
      enabled: true,
      ttl: 3600,
    },
  },
};

export const createHfClient = () => {
  return new HfInference(modelConfig.inference.apiKey);
};