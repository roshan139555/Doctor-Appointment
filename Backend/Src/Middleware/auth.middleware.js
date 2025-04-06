import { ApiErrors } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User} from "../model/user.model.js";

export const verifyJwt = asyncHandler(async(req, _ ,next)=>{
    try{
        const token = req.cookie?.accessToken || req.header("Authorization")?.replace("Bearer","")

        if(!token){
            throw new ApiErrors(401,"unauthorized request")
        }
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

        if(!user){
            throw new ApiErrors(401,"Invalid Access Token")
        }
        req.user = user;
        next()
    }
    catch(error){
        throw new ApiErrors(401,error?.message || "Invalid Access Token")
    }

   
})