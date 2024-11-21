import { MongoClient, Db } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL as string, {});

let db: Db;

export const connectToDatabase = async () => {
  if (!db) {
    await client.connect();
    db = client.db(process.env.MONGO_DB);
  }

  return db;
};
