import jwt from 'jsonwebtoken'

const authAdmin = async(req,res,next) =>{
    try {
        const {atoken} =req.header

        if (!atoken) {
            return res.json({success:false,message:"not authorized"})
        }
        const decoded = jwt.verify(atoken, process.env.SECRET_KEY)
        if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false, message:"not authorized login again"})
            
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
 
export default authAdmin;
