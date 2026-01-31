import validator from "validator"
import bycrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import docterModel from "../models/docterModel.js"
import jwt from 'jsonwebtoken'  
// import { JsonWebTokenError } from "jsonwebtoken"

const addDoctor = async (req, res) => { 
    // API for adding doctor
    try {
        const { name, email, password, sepcilty, degree, exprince, about, fees, address } = req.body
        

        console.log(
            { name, email, password, sepcilty, degree, exprince, about, fees, address },
            imageFile
        )
        const imageFile=req.file
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
        const imageUrl=imageUpload.secure_url

        const newDoctor=new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true ,message:"Doctor Added"})



        res.send("Doctor added")
    } catch (error) {
        console.log(error)
        
        res.send({success:false,message:error.message})
    }
}

// API For admin Login
const loginAdmin =async(req,res) =>{
    try{
        const {email ,password}=req.body
        if(email===process.env.ADMIN_EMAI && process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }else{
            res.json({success:file,message:"Invalid credentials"})
        }

    }catch(error){
        console.log(error)
        res.send({success:false,message:error.message}) 
    }
    
}

export { addDoctor,loginAdmin }
