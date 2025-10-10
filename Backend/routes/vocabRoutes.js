import express from "express";
import { getWordOfTheDay } from "../controllers/vocabController.js";

const router = express.Router();

// GET /api/vocab/word
router.get("/word", getWordOfTheDay);

export default router;