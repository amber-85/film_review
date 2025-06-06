import express from "express";
import { login, register } from "../controllers/authController.js";
import  authMiddleware from "../middleware/authMiddleware.js";
import { getMovies, getMovieById, createMovie, updateMovie, deleteMovie, getReviews } from "../controllers/movieController.js";

const router=express.Router();

router.post("/", authMiddleware,createMovie);
router.get("/", getMovies);
router.get("/:id", getMovieById);
router.put("/:id",authMiddleware, updateMovie);
router.delete("/:id",authMiddleware, deleteMovie);
router.get("/:id/reviews", getReviews)

export default router;