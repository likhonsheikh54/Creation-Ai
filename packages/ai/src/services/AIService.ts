import { HfInference } from "@huggingface/inference";
import { CohereClient } from "cohere-ai";
import { modelConfig } from "@creation/config/huggingface";
import { Cache } from "@creation/core/cache";

export class AIService {
  private hf: HfInference;
  private cohere: CohereClient;
  private cache: Cache;

  constructor() {
    this.hf = new HfInference(process.env.HF_TOKEN);
    this.cohere = new CohereClient({ 
      token: process.env.COHERE_TOKEN 
    });
    this.cache = new Cache();
  }

  async generateCode(prompt: string) {
    const cacheKey = `code_${prompt}`;
    const cached = await this.cache.get(cacheKey);
    
    if (cached) {
      return cached;
    }

    const result = await this.hf.textGeneration({
      model: modelConfig.models.codeGeneration.model,
      inputs: prompt,
      parameters: {
        temperature: modelConfig.models.codeGeneration.temperature,
        max_new_tokens: modelConfig.models.codeGeneration.maxLength,
      }
    });

    await this.cache.set(cacheKey, result, 3600);
    return result;
  }

  async analyzeCode(code: string) {
    return await this.hf.featureExtraction({
      model: modelConfig.models.analysis.model,
      inputs: code,
    });
  }

  async generateDocumentation(code: string) {
    const response = await this.cohere.generate({
      prompt: `Generate documentation for this code:\n${code}`,
      model: "command-r-08-2024",
      maxTokens: 500,
    });

    return response.generations[0].text;
  }
}