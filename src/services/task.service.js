import Task from "../models/task.js";
import User from "../models/User.js";
import ApiError from "../utils/errorHandler.js";

export const createTaskservices=async(user,taskdata)=>{
    console.log("user==",user)
    const userdata=await User.findById(user.id)
    const {title,description}=taskdata;
    if(!userdata){
        throw new ApiError(`user with id=${user.id} not found`,404)
    }
    const userId =user.id
    try{
        const newTask=await Task.create({
            user:userId,
            title,
            description
        })
        return newTask;
    }catch(error){
throw new error("error creating Task",error)
}
};

export const getAllTaskService=async(user)=>{
    try{
        const userTasksData=await Task.find({user:user.id})
        return userTasksData

    }catch(error){
        console.log(error)
        throw new ApiError("error fetching task",error)

    }
}