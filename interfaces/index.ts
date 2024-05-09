import { FlowAuthPolicy } from "@genkit-ai/flow";
import { I, g } from "@genkit-ai/flow/lib/flow-B1-0l6lS";
import { RequestHandler } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ZodTypeAny } from "zod";

export interface RetrieverFlowOptions {
  prompt: string;
  indexPath: string;
  temperature?: number;
  maxOutputTokens?: number;
  topK?: number;
  topP?: number;
  stopSequences?: string[];
}

export interface IndexerFlowOptions {
  dataPath: string;
  indexOutputPath: string;
  chunkSize?: number;
  separator?: string;
}

export interface PluginOptions {
  apiKey?: string;
}

export interface FlowConfigOptions {
  name: string;
  inputSchema?: ZodTypeAny | undefined;
  outputSchema?: ZodTypeAny | undefined;
  streamSchema?: ZodTypeAny | undefined;
  authPolicy?: FlowAuthPolicy<ZodTypeAny> | undefined;
  middleware?:
    | RequestHandler<
        ParamsDictionary,
        any,
        any,
        ParsedQs,
        Record<string, any>
      >[]
    | undefined;
  invoker?: I<ZodTypeAny, ZodTypeAny, ZodTypeAny> | undefined;
  experimentalDurable?: boolean | undefined;
  experimentalScheduler?: g<ZodTypeAny, ZodTypeAny, ZodTypeAny> | undefined;
}
