import mongoose from "mongoose";

const reviewSchema= new mongoose.Schema({
    movieId: {type:mongoose.Schema.Types.ObjectId, ref:"Movie", required:true},
    userId: {type:mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    rating: {type:Number, required:true, min:1, max:5},
    comment: {type:String, required:true},
    createdAt: {type:Date, default:Date.now}
});

// export reviewSchema as a model
export default mongoose.model("Review", reviewSchema);
