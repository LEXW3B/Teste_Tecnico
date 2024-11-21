import express from "express";
import riderRoutes from "../src/routes/ride_routes";

const app = express();

app.use(express.json());

app.use("/ride", riderRoutes);

export default app;
