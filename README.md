# Genkit Plugin HNSW for RAG Implementation
You can contribute to this plugin in this [Repository](https://github.com/retzd-tech/genkitx-hnsw).
Contributions are welcome!

## Description
This plugin is the retriever part to implement Augmented Generation (RAG) in Generative AI for your application with Firebase Genkit, this is a Genkit plugin flow to process your prompt with Gemini LLM Model enriched with HNSW Vector Database you provided.

HNSW is Hierarchical Navigable Small World (HNSW) graphs are among the top-performing indexes for vector similarity search. HNSW is a hugely popular technology that time and time again produces state-of-the-art performance with super fast search speeds and fantastic recall.

With this you can achieve a high performing AI Model to get more context or more knowledge based on what you defined.

## Installation
Before installing the plugin, ensure you have the following prerequisites installed:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js installation)
- [TypeScript](https://www.typescriptlang.org/) (you can install it globally via npm: `npm install -g typescript`)

### Vector index preparations
Make sure you have your vector Index ready, if you haven't, you can get the vector index by using `genkit-hnsw-indexer` plugin, try to check it [here](https://www.npmjs.com/package/genkitx-hnsw-indexer).

For the example, I have created a Vector index with some informations about Restaurants.

![Vector Index](https://github.com/retzd-tech/genkitx-hnsw-indexer/raw/main/assets/restaurants-data.png?raw=true)

Once you have all the prerequisites ready, you can install the plugin using npm:

```bash
npm install genkitx-hnsw
```

## Usage

### Register HNSW Plugin
Import the plugin into your Genkit project
```bash
import { googleAI } from "@genkit-ai/googleai";
import { HNSW } from "genkitx-hnsw";

export default configureGenkit({
  plugins: [
    googleAI(),
    HNSW({ apiKey: "GOOGLE_API_KEY" })
  ]
});
```
Make sure you import the GoogleAI plugin for the Gemini LLM Model provider, currently this plugin only supports Gemini, will provide more model soon!

### Genkit UI
Open Genkit UI and choose the registered Plugin "HNSW Retriever"
![Genkit UI Flow](https://github.com/retzd-tech/genkit-hnsw/blob/main/assets/flows-list.png?raw=true)

### Genkit Flow Running
Execute the flow with the required parameter
- `prompt` : Type your prompt where you will get answers with more enriched context based on the vector you provided.
- `indexPath` : Define Vector Index path you wanna use, you can also retrieve it by using `genkitx-hnsw-indexer` plugin, this is the vector that will add more context for the LLM model to answer.

In this example, Let's try to ask the AI Model about the information of a restaurant that has been provided based on the Vector Index.

We can type the prompt and run it, after the flow finished, you will get response from the Gemini LLM Model enriched with specific knowledge based on your Vector Index.

![Genkit UI Prompt Result](https://github.com/retzd-tech/genkit-hnsw/blob/main/assets/prompt-result.png?raw=true)

## Optional Parameter
  - `temperature: number`
  temperature controls the randomness of the generated output. Lower temperatures result in more deterministic output, with the model selecting the most likely token at each step. Higher temperatures increase the randomness, allowing the model to explore less probable tokens, potentially generating more creative but less coherent text.
  - `maxOutputTokens: number`
  This parameter specifies the maximum number of tokens (words or subwords) the model should generate in a single inference step. It helps control the length of the generated text.
  - `topK: number`
  Top-K sampling restricts the model's choices to the top K most likely tokens at each step. This helps prevent the model from considering overly rare or unlikely tokens, improving the coherence of the generated text.
  - `topP: number`
  Top-P sampling, also known as nucleus sampling, considers the cumulative probability distribution of tokens and selects the smallest set of tokens whose cumulative probability exceeds a predefined threshold (often denoted as P). This allows for dynamic selection of the number of tokens considered at each step, depending on the likelihood of the tokens.
  - `stopSequences: string[]`
  These are sequences of tokens that, when generated, signal the model to stop generating text. This can be useful for controlling the length or content of the generated output, such as ensuring the model stops generating after reaching the end of a sentence or paragraph.