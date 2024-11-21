import app from "./app";
import { connectToDatabase } from "./config/database";

const port = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.info(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to database", error);
    process.exit(1);
  }
};

startServer();
