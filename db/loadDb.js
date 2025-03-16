import { DataAPIClient } from "@datastax/astra-db-ts";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import "dotenv/config";
import OpenAI from "openai";
import sampleData from "./sample-data.json" with { type: "json" };

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
});

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, {
    namespace: process.env.ASTRA_DB_NAMESPACE,
});

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
});

// Create collection if it does not exist
const createCollection = async () => {
    try {
        await db.createCollection("portfolio", {
            vector: {
                dimension: 1536,
            },
        });
    } catch (error) {
        if (error.message.includes("Collection 'portfolio' already exists")) {
            console.log("Collection already exists, skipping creation.");
        } else {
            console.error("Error creating collection:", error);
        }
    }
};

// Convert object/array description to string
const ensureStringDescription = (description) => {
    if (Array.isArray(description)) {
        return description.join(" "); // Join array items into a single string
    }
    if (typeof description === "object") {
        return JSON.stringify(description); // Convert object to JSON string
    }
    return description; // Already a string
};

// Load data into the collection
const loadData = async () => {
    const collection = await db.collection("portfolio");

    // Iterate through each item in sampleData
    for await (const { id, info, description } of sampleData) {
        const stringDescription = ensureStringDescription(description);

        // Split the description into chunks
        const chunks = await splitter.splitText(stringDescription);
        let i = 0;

        // For each chunk, generate embeddings and insert into DB
        for await (const chunk of chunks) {
            const { data } = await openai.embeddings.create({
                input: chunk,
                model: "text-embedding-3-small",
            });

            const res = await collection.insertOne({
                document_id: id,
                $vector: data[0]?.embedding,
                info,
                description: chunk,
            });

            i++;
        }
    }

    console.log("Data added");
};

// Run the process
createCollection().then(() => loadData());