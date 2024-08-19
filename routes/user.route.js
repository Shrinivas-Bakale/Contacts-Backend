import { Router } from "express";
import {
  getCurrentUser,
  loginUser,
  signupUser,
} from "../controller/user.controller.js";

const router = Router();

router.post("/signupUser", signupUser);

router.post("/loginUser", loginUser);

router.get("/getCurrentUser", getCurrentUser);

export default router;
