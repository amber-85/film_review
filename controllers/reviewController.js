import Review from "../models/Review.js";

export const createReview=async(req,res)=>{
    try{
        const review=await Review.create({...req.body, userId:req.user.userId});
        res.status(201).json(review);
    } catch (error){
        res.status(400).json({error:error.message});
    }
};

export const getReviews=async(req,res)=>{
    try{
        const reviews=await Review.find().populate("movieId userId")
        res.json(reviews);
    } catch (error){
        res.status(500).json({error:error.message});
    }
};

// GET /reviews/:id: Get a specific review
export const getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate("movieId userId", "title username");
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateReview=async(req,res)=>{
    const review=await Review.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(review);
};

export const deleteReview=async(req,res)=>{
    await Review.findByIdAndDelete(req.params.id);
    res.json({message:"Review deleted"});
}