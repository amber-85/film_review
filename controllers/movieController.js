import Movie from "../models/Movie.js";
import Review from "../models/Review.js";

export const createMovie= async (req,res)=>{
    try{
        const movie=await Movie.create(req.body);
        res.status(201).json(movie);
    } catch(error){
        res.status(400).json({error:error.message});
    }
};

export const getMovies=async (req,res)=>{
    const movies=await Movie.find();
    res.json(movies);
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateMovie=async (req,res)=>{
    const movie =await Movie.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(movie);
};

export const deleteMovie =async (req,res)=>{
    await Movie.findByIdAndDelete(req.params.id);
    res.json({message:"Movie deleted"});
};

export const getReviews=async(req,res)=>{
    const reviews=await Review.find({movieId:req.params.id}).populate("userId", "username");
    res.json(reviews);
};