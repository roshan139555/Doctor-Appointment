import validator from 'validator'
import bcrypt from 'bcrypt'
import doctorModel from '../models/doctor.model.js'
import {v2 as cloudinary} from 'cloudinary'
import jwt from 'jsonwebtoken'


const addDoctor = async(req,res)=>{
    try {
        const{name,email,password, speciality, degree, experience, about, fees, address} = req.body
        const imageFile = req.file 

        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({success: false, message:"Please enter the required fields."})
        }
        if (!validator.isEmail(email)) {
            return res.json({success:false, message: "Invaild email address."})
        }
        if (password.length<8) {
            return res.json({success:false, message: "Password must be atleast of 8 characters"})
        }
        if (!imageFile) {
        return res.json({success:false, message: "Image file is required."})
}
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"}
        )
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date: Date.now()
        }
        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true, message:"Doctor added"})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const loginAdmin = async(req,res) => {
    try {
        const{email,password} = req.body
        
        if (email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.SECRET_KEY)
            res.json({success:true,message:"successfully login", token})
            
        } else {
            res.json({success:false,message:"Invalid Credential"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {addDoctor,loginAdmin}