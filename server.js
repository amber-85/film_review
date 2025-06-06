import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

const app=express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDB connected"))
    .catch((err=>console.error(err)));

app.use("/auth", authRoutes);
app.use("/movies", movieRoutes);
app.use("/reviews", reviewRoutes);

const PORT=process.env.PORT || 8091;
app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`));