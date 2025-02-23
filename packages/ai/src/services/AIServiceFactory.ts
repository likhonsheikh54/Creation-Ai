import { DeepSeekAI, HuggingFaceAI, CohereAI } from './providers';
import { AIServiceConfig, AIProvider } from '../types';

export class AIServiceFactory {
  private providers: Map<string, AIProvider>;
  private config: AIServiceConfig;

  constructor(config: AIServiceConfig) {
    this.config = config;
    this.providers = new Map();
    this.initializeProviders();
  }

  private initializeProviders(): void {
    this.providers.set('deepseek', new DeepSeekAI(this.config.deepseek));
    this.providers.set('huggingface', new HuggingFaceAI(this.config.huggingface));
    this.providers.set('cohere', new CohereAI(this.config.cohere));
  }

  async generateComponent(params: {
    prompt: string;
    framework: string;
    styling: string;
    accessibility: boolean;
  }) {
    // Primary provider is DeepSeek for code generation
    const provider = this.providers.get('deepseek');
    const result = await provider.generateCode({
      ...params,
      enhanceWithAccessibility: params.accessibility
    });

    // Enhance with HuggingFace for additional analysis
    const analysis = await this.providers.get('huggingface')
      .analyzeCode(result.code);

    return {
      ...result,
      analysis
    };
  }

  async getCompletion(context: string) {
    // Use Cohere for advanced completions
    return this.providers.get('cohere')
      .getCompletion(context);
  }
}

export default AIServiceFactory;