import validator from 'validator'
import bcrypt from 'bcrypt'


const addDoctor = async(req,res)=>{
    try {
        const{name,email,password, speciality, degree, experience, about, fee, address} = req.body
        const imageFile = req.file 

        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fee || !address) {
            return res.json({success: false, message:"Please enter the required fields."})
        }
        if (!validator.isEmail(email)) {
            return res.json({success:false, message: "Invaild email address."})
        }
        if (password.length<8) {
            return res.json({success:false, message: "Password must be atleast of 8 characters"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        
        


    } catch (error) {
        
    }
}

export {addDoctor}