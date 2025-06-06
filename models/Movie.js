import mongoose from "mongoose";

const movieSchema=new mongoose.Schema({
    title: {type:String, required:true},
    director: {type:String, required:true},
    releaseYear: {type:Number, required:true},
    genre: {type:String, required:true},
});

// export movieSchema as a model
export default mongoose.model("Movie", movieSchema);