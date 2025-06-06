import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const register=async (req, res) =>{
    try{
        const user=new User(req.body);
        await user.save();
        res.status(201).json({message: "User registered successfully"});
    } catch (error){
        res.status(400).json({error: error.message});
    };
};

export const login=async (req, res) =>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user || !(await user.comparePassword(password)))
            return res.status(401).json({message:"Invalid credentials"});

        const token=jwt.sign({userId:user._id, role:user.role}, process.env.JWT_SECRET, {expiresIn: "1d"});
        //return login message and token
        res.status(200).json({message:"login successful", token});
    } catch (error){
        res.status(500).json({error: error.message});
    }
}