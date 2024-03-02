import authController from "./modules/auth/auth.controller.js";
import usersController from "./modules/users/users.controller.js";
import express from "express";
import swaggerUI from "swagger-ui-express";
import YAML from "yaml";
import fs from "fs";
import { config } from "./configuration/index.js";
const app = express();
const port = config.port;
app.use(express.json());
app.use("/auth", authController);
app.use("/user", usersController);
const file = fs.readFileSync("./src/swagger/swaggerDocument.yml", "utf8");
const swaggerDocument = YAML.parse(file);
app.use("/api", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map