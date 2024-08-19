import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signupUser(req, res) {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    res.status(400).json({ message: "All fields are mandatory" });
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(200).json({ _id: user._id, email: user.email });
  } else {
    res.status(400).json({ message: "User credentials not valid" });
  }
}

export async function loginUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "All fields are mandatory" });
  }

  const user = await User.findOne({ email });
  const isMatch = await bcrypt.compare(password, user.password);

  if (user && isMatch) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.userName,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401).json({ message: "Login failed" });
  }

  res.status(200).json({ message: "Login" });
}

export async function getCurrentUser(req, res) {
  res.status(200).json({ message: "Current" });
}
