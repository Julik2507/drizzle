import authController from "./modules/auth/auth.controller.js";
import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/auth", authController);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
