import mongoose from "mongoose";
import { createTaskservices,getAllTaskService } from "../services/task.service.js";
import Task from "../models/task.js";

export const createTask =async(req,res)=>{
    const user=req.user;
    console.log("user==",user)
    try{
        if(!user){
            return res.startus(401).json({message:"unauthorized user"})
        }
        const {title,description}=req.body;
        if(!title || !description){
            return res.status(201).json({message:"please provide"})
        }
        const taskdata={
            title:title,
            description:description
        }
        const task=await createTaskservices(user,taskdata);
        return res.status(201).json({message:"task created successfully",task})

    }catch(error){
        console.log("error==",error)
        return res.status(500).json({message:'internal server error',error});
    }
    }

    export const getAllTasks=async(req,res)=>{
        const user=req.user;
        console.log("user===",user)
        try{
         if(!user){
            return res.stutus(401).json({message:"user must be loggedIn"})
         } 
         const userTasks=await getAllTaskService(user)
         console.log("user Tasks===",userTasks)
         return res.status(200).json(userTasks);

        }catch ( error ){
            console.log(error)
            return res.status(500).json({message:"internal server error",error});
        }
    }

    export const updateTask=async(req,res)=>{
        try {
            const {id}=req.params;
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({message:"invalid Task format!"})
            }
            const updatedTask=await Task.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
            if(!updatedTask){
                return res.status(404).json({message:"Task not found!"})
            }
            res.status(200).json({message:"Task has been updated sucessfully!"})
            
        } catch (error) {
            console.log(error)
          res.status(500).json({message:"internal server error!"})  
        }
        
    }