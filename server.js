import express from "express";
import dotenv from "dotenv";
import contactsRoutes from "./routes/contacts.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactsRoutes);

app.listen(port, (res, req) => {
  console.log("Hello");
});
