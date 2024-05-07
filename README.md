# Genkit Plugin RAG - HNSW Indexer
You can contribute to this plugin in this [Repository](https://github.com/retzd-tech/genkitx-hnsw-indexer).
Contributions are welcome!

## Description
This plugin is the indexer part to implement Augmented Generation (RAG) in Generative AI for your application with Firebase Genkit, this is a Genkit plugin flow to save data into vector store with HNSW Vector Store, Gemini Embedder and Gemini LLM.

HNSW is Hierarchical Navigable Small World (HNSW) graphs are among the top-performing indexes for vector similarity search. HNSW is a hugely popular technology that time and time again produces state-of-the-art performance with super fast search speeds and fantastic recall.

With this you can achieve a high performing AI Model to get additional knowledge.

## Installation
Before installing the plugin, ensure you have the following prerequisites installed:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js installation)
- [TypeScript](https://www.typescriptlang.org/) (you can install it globally via npm: `npm install -g typescript`)

Once you have the prerequisites installed, you can install the plugin using npm:

```bash
npm install genkitx-hnsw-indexer
```

## Usage

### Register HNSW Indexer Plugin
Import the plugin into your Genkit project
```bash
import { HNSWIndexer } from "genkitx-hnsw-indexer";

export default configureGenkit({
  plugins: [
    HNSWIndexer({ apiKey: "GOOGLE_API_KEY" })
  ]
});
```

### Data preparations
Prepare your data or documents in a Folder
![Restaurants data](https://github.com/retzd-tech/genkitx-hnsw-indexer/blob/main/assets/restaurants-data.png?raw=true)

### Genkit UI
Open Genkit UI and choose the registered Plugin "HNSW Indexer"
![Genkit UI Flow List](https://github.com/retzd-tech/genkitx-hnsw-indexer/blob/main/assets/genkit-ui-flow.png?raw=true)

### Genkit Flow Running
Execute the flow with Input and Output required parameter
- Input : Your data and other documents path to be learned by the AI
- Output : Your expected output path for your Vector Store Index that is processed based on the data and documents you provided

![Genkit UI Flow Run](https://github.com/retzd-tech/genkitx-hnsw-indexer/blob/main/assets/genkit-ui-flow-plugin.png?raw=true)

### Vector Store Index Result
Vector store will be saved in the defined Output path. this index will be used for the RAG process with the other retrieval plugin.
![HNSW Vector](https://github.com/retzd-tech/genkitx-hnsw-indexer/blob/main/assets/vector-result.png?raw=true)