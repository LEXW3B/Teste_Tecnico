import app from "./app";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/database";

dotenv.config();

const port = process.env.PORT || 3000;

const startServer = async () => {
  console.log("MONGO_USER:", process.env.MONGO_USER);
  console.log("MONGO_PASS:", process.env.MONGO_PASS);
  console.log("MONGO_DB:", process.env.MONGO_DB);
  console.log("MONGO_URL:", process.env.MONGO_URL);
  console.log("PORT:", process.env.PORT);

  console.log("Iniciando servidor");
  try {
    await connectToDatabase();
    console.log("Conectado ao banco de dados");
    app.listen(port, () => {
      console.info(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to database", error);
    process.exit(1);
  }
};

startServer();
