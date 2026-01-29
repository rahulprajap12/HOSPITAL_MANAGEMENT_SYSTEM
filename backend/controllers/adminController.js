import validator from "validator"
import bycrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, sepcilty, degree, exprince, about, fees, address } = req.body
        const imageFile = req.file

        console.log(
            { name, email, password, sepcilty, degree, exprince, about, fees, address },
            imageFile
        )
        if (
            !name ||
            !email ||
            !password ||
            !sepcilty ||
            !degree ||
            !exprince ||
            !about ||
            !fees ||
            !address ||
            !imageFile
        ) {
            return res.json("Missing details")
        }

        // validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message: "please enter a valid email"})
        }

        // validating strong password
        if(password.length<8){
            return res.json({success:false,message:"please enter a strong password"})
        }
        // hashing doctor password
        const salt=await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password,salt)

        // upload image to cloudinary

        const imageUpload=await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})



        res.send("Doctor added")
    } catch (error) {
        console.log(error)
        res.send("Error")
    }
}

export { addDoctor }
