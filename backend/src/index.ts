import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import path from "path";
import { keyRouter } from "./routers/keyRouter";
import { orderRouter } from "./routers/orderRouter";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";
import { userRouter } from "./routers/userRouter";
import connectDB from "./db";

dotenv.config();

connectDB();


const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/seed", seedRouter);
app.use("/api/keys", keyRouter);

app.use(express.static(path.join(__dirname, "../../client/dist")));
app.get("*", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"))
);

const PORT: number = parseInt(process.env.PORT || "5000", 10);
const env = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(`SERVER RUNNING IN ${env} at http://localhost:${PORT}`);
});
