import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiErrors} from "../utils/ApiError.js";
import { User } from "../model/user.model.js";
import {ApiResponse} from "../utils/Apiresponse.js";
import jwt from "jsonwebtoken";
import mongoose, { SchemaTypeOptions } from "mongoose";

const generateAccessAndRefreshToken = async(userId)=>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return{accessToken,refreshToken}
        
    } catch (error) {
        throw new ApiErrors(500, "Something went wrong while generating refresh and access token ")
        
    }
}


//register user
const registerUser = asyncHandler(async(req,res)=>{
    const {username,fullname,email,password} = req.body

    if ([username,fullname,email,password].some((field)=>field?.trim()==="")) {
        throw new ApiErrors(400,"All fields are required")
    }

    const existedUser = await User.findOne({
        $or:[{username},{email}]
    })

    if(existedUser){
        throw new ApiErrors(409,"Email or Username already exist.")
    }

    const user = await User.create({
        email,
        fullname,
        password,
        username
    })
    const registerdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!registerdUser){
        throw new ApiErrors(400,"Something went wrong")
    }

    return res.status(201).json(
        new ApiResponse(200, registerdUser,"User Registered Successfully")
    )
})
//Login

const loginUser = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body
    console.log(email);

    if(!username && !email){
        throw new ApiErrors(400, "Username and email is required")
    }

    const user = await User.findOne({
        $or:[{username},{email}]
    })

    if(!user){
        throw new ApiErrors(404,"User does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)
    if(!isPasswordValid){
        throw new ApiErrors(401, "Invalid Password")
    }

    const {accessToken , refreshToken} = await user.generateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    const option = {
        httpOnly: true,
        secure: true
    }

    return res.status(200).cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(new ApiResponse(200,{
        user:loggedInUser,accessToken,refreshToken
    },
    "user logged in Successfully"
)
)
})

const logoutUser = asyncHandler(async(req,res)=>{
    const{username, email, password} = req.body
    const user = await User.findOne({$or:[{username},{email}]})

    if(!user) {
        throw new ApiErrors(400, "User does not exist ")
    }
    const correctPassword = await user.isPasswordCorrect(password)
    if(!correctPassword){
        throw new ApiErrors(401,"Invalid Password")
    }
    return res.status(200).clearcookie("accesstoken",option).clearcookie("refreshToken",option)
    .json(new ApiResponse(200,{  
    }, "User logged out successfully"
   
))

})

const changeCurrentPassword = asyncHandler(async(req,res)=>{

    const {oldPassword,newPasword} = req.body

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)
    if(!isPasswordCorrect){
        throw new ApiErrors(410,"Wrong Password")
    }

    user.password = newPasword
    await user.save({validateBeforeSave:false})

    return res.status(200)
    .json(new ApiResponse(200,{}, "password changed successfully"))
})






export {registerUser,loginUser,logoutUser,generateAccessAndRefreshToken,changeCurrentPassword}