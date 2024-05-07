import { genkitPlugin } from "@genkit-ai/core";
import { defineFlow } from "@genkit-ai/flow";
import * as z from "zod";

import { retrieveResponseWithVector } from "./retriever";
import { FlowOptions, PluginOptions } from "./interfaces";
import { throwError } from "./utilities";
import {
  PLUGIN_NAME,
  FLOW_NAME,
  ERROR_NO_API_KEY,
  SCHEMA_PROMPT,
  SCHEMA_INDEX_PATH,
  SCHEMA_RESULT,
  ERROR_INVALID_ARGUMENT
} from "./constants";

const flowConfig = {
  name: FLOW_NAME,
  inputSchema: z.object({
    prompt: z.string().describe(SCHEMA_PROMPT),
    indexPath: z.string().describe(SCHEMA_INDEX_PATH)
  }),
  outputSchema: z.string().describe(SCHEMA_RESULT),
};

const flowAction = async (
  flowOptions: FlowOptions,
  pluginOptions: PluginOptions
) => {
  try {
    return await retrieveResponseWithVector(flowOptions, pluginOptions);
  } catch (error) {
    return `Vector saving error ${error}`;
  }
};

const checkApiKey = (pluginOptions: PluginOptions) => {
  const { apiKey } = pluginOptions;
  const isNoApiKey = !apiKey && !process.env.GOOGLE_API_KEY;
  if (isNoApiKey) return throwError(ERROR_INVALID_ARGUMENT, ERROR_NO_API_KEY);
};

export const HNSW = genkitPlugin(
  PLUGIN_NAME,
  async (pluginOptions: PluginOptions) => {
    checkApiKey(pluginOptions);
    defineFlow(flowConfig, (flowOptions) =>
      flowAction(flowOptions, pluginOptions)
    );
  }
);
