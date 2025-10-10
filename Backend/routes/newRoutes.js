import express from "express";
import { getNews } from "../controllers/newsController.js";

const router = express.Router();

// GET /api/news?category=technology
router.get("/", getNews);

export default router;