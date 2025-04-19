import { deleteModel } from "mongoose";
import User from "../models/User.js";

const UserUpdate= async(req,res) =>{
try{
    const {name,email} =req.body
    const id = req.params.id;

    const existUser= await User.findById(id);

    if(!existUser){
        return res.status(400).json({message:"User not exist"});
    }

    const UpdatedUser = await User.findByIdAndUpdate(id,{
        name:name,
        email:email
    },{new:true}
)

// res goes here
res.status(200).json({message:"User Update success ",UpdatedUser});

}
catch(error){
    res.status(500).json({message:"internal server error"});

}

}
  
export default UserUpdate;