import { saveVectorIndexer } from "./../indexer";
import { retrieveResponseWithVector } from "./../retriever";
import {
  RetrieverFlowOptions,
  PluginOptions,
  IndexerFlowOptions,
} from "./../interfaces";

export const hnswIndexerAction = async (
  flowOptions: IndexerFlowOptions,
  pluginOptions: PluginOptions
) => {
  try {
    return await saveVectorIndexer(flowOptions, pluginOptions);
  } catch (error) {
    return `Vector saving error ${error}`;
  }
};

export const hnswRetrieverAction = async (
  flowOptions: RetrieverFlowOptions,
  pluginOptions: PluginOptions
) => {
  try {
    return await retrieveResponseWithVector(flowOptions, pluginOptions);
  } catch (error) {
    return `Vector saving error ${error}`;
  }
};
