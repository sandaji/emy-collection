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

dotenv.config();

const uri = "mongodb://127.0.0.1:27017/emy-collection";

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI || uri, {
      connectTimeoutMS: 3000,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error: ", error);
  }
}



connect();


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

app.use(express.static(path.join(__dirname, "../../frontend/dist")));
app.get("*", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"))
);

const PORT: number = parseInt(process.env.PORT || "4000", 10);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
