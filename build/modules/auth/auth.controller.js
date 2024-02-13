import express from "express";
import { createPerson } from "./auth.service.js";
const router = express.Router();
router.post("register", async (req, res) => {
    const result = await createPerson(req.body);
    res.send(result);
});
export default router;
//# sourceMappingURL=auth.controller.js.map