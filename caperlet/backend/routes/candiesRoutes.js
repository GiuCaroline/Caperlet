import express from "express";
import { candies } from "../controllers/candiesController.js";

const router = express.Router();

router.get("/candies", candies);

export default router;