import mongoose from "mongoose";
const schema = mongoose.schema(
    {
        userId:{
            type: mongoose.SchemaType.ObjectId,
            ref: 'User',
            required: true
        },
        isRead:{
            type: Boolean,
            default: false

        },
        content:{
            type: String,
            default:""
        }
        
    },
    {
        timestamps: true
    }
)


export const notification = mongoose.model("notification", schema)