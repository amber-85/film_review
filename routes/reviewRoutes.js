import express from "express";
import authMiddleware from "../middleware/authMiddleware.js"
import { createReview, getReviews,getReview, updateReview, deleteReview } from "../controllers/reviewController.js";

const router = express.Router();
router.post("/", authMiddleware, createReview);
router.get("/",getReviews);
router.get("/:id", getReview);
router.put("/:id", authMiddleware, updateReview);
router.delete("/:id", authMiddleware, deleteReview);

export default router;