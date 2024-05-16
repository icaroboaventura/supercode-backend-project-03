import express from "express";
import morgan from "morgan";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/products", pro);
app.use("/api/v1/users");
app.use("/api/v1/orders");

app.all();
