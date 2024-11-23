import { MongoClient, Db } from "mongodb";
import { IRideData } from "../interface/ride_interface";
import { rideDataSchema } from "../schema/ride_data_schema";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URL || !process.env.MONGO_DB) {
  throw new Error("MONGO_URL must be set in .env file");
}

const client = new MongoClient(process.env.MONGO_URL as string, {});

let db: Db;

export const connectToDatabase = async (): Promise<Db> => {
  if (!db) {
    await client.connect();
    db = client.db(process.env.MONGO_DB);
    console.info("Connecting to MongoDB...");
  }

  return db;
};

export const saveRider = async (rideData: IRideData): Promise<string> => {
  const { error } = rideDataSchema.validate(rideData);

  if (error) throw new Error(`Validation error: ${error.message}`);

  const database = await connectToDatabase();
  const collection = database.collection("riders");
  const result = await collection.insertOne(rideData);
  console.info("Data saved successfully:", result.insertedId.toString());

  return result.insertedId.toString();
};
