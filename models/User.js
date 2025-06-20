
import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:     { type: String, default: "user" }
});

userSchema.pre('save', async function (next){
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.comparePassword =function (password){
    return bcrypt.compare(password, this.password);
};

// export userSchema as a model
export default mongoose.model("User", userSchema);