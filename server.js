import express from "express";
import dotenv from "dotenv";
import contactsRoutes from "./routes/contacts.route.js";
import userRoutes from "./routes/user.route.js";
import { errorHandler } from "./middleware/error.handler.js";
import { connectDb } from "./config/dbConnection.js";

dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", contactsRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(port, (res, req) => {
  console.log("Hello");
});
