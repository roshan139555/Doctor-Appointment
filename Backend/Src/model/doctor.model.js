import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
        userId:{
            type: mongoose.Schema.ObjectId,
            ref:"User",
            required:true
        },

        specialization:{
            type:String,
            required:true
        },
        experience:{
            type:Number,
            required:true
        },
        rating:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true
    }
);


export const Doctor = mongoose.model("Doctor", userSchema)