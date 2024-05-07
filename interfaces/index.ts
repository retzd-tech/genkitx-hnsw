export interface FlowOptions {
  prompt: string;
  indexPath: string;
  temperature?: number;
  maxOutputTokens?: number;
  topK?: number;
  topP?: number;
  stopSequences?: string[]
}

export interface PluginOptions {
  apiKey?: string;
} 