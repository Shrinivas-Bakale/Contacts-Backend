import express from "express";
import { Router } from "express";

const app = express();
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello there" });
});

export default router;
