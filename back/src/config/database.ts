import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let dbInstance: Db;

const mongoUrl = process.env.MONGO_URL;
const mongoDbName = process.env.MONGO_DB;

if (!mongoUrl || !mongoDbName) {
  throw new Error("MONGO_URL ou MONGO_DB não estão definidas no arquivo .env");
}

export const connectToDatabase = async (): Promise<Db> => {
  if (!dbInstance) {
    try {
      const client = new MongoClient(mongoUrl, {
        serverSelectionTimeoutMS: 5000,
      });
      await client.connect();
      console.info("Successfully connected to MongoDB");

      dbInstance = client.db(mongoDbName);
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
