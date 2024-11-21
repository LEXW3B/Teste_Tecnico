import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let dbInstance: Db;

export const connectToDatabase = async (): Promise<Db> => {
  if (!dbInstance) {
    try {
      const client = new MongoClient(process.env.MONGO_URL as string, {
        // useUnifiedTopology: true,
      });
      await client.connect();
      console.info("Successfully connected to MongoDB");

      dbInstance = client.db(process.env.MONGO_DB);
    } catch (error) {
      console.error("Failed to connect to MongoDB", error);
      throw new Error("Database connection failed");
    }
  }

  return dbInstance;
};

export const getDatabase = (): Db => {
  if (!dbInstance) {
    throw new Error(
      "Database is not connected. Call connectToDatabase() first."
    );
  }

  return dbInstance;
};
