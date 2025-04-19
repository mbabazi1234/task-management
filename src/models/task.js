import mongoose, { Schema } from "mongoose";
import { model } from "mongoose";

const TaskSchema =new Schema({
    user:{
     type:Schema.Types.ObjectId,   
    ref:"user",
    requered:true
    },
    title:{
        type:String,
        unique:true,
        required:true
    },
description:{
    type:String,
    requered:true,
    trim:true
},
completed:{
    type:Boolean,
    defoult:false
}},
{
   timestamp:true 
});
const Task=mongoose.models.Task || model("Task",TaskSchema);
export default Task;