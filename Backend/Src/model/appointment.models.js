import mongoose from "mongoose";
import { Schema } from "mongoose";
import { User } from "./user.model";

const appointmentSchema = mongoose.Schema(
    {
        userId: { 
            type: Schema.Types.ObjectId, ref: 'User',lowercase: trim
         },
         doctorId:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required: true
         },
         status:{
            type:String,
            default:"Pending"
         },
         time:{
            type:String,
            required:true
         },
         date:{
            type:String,
            required:true
         }
        

    },
    {
        timestamps: true,
    }
)
export const Appointment = mongoose.model("Appointment", appointmentSchema );