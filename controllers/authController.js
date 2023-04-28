import userModel from "../models/userModel.js"
import bcrypt from "bcryptjs"
export  const registerController = async (req,res,next)=>{
    try{
        const {name,email,password}=req.body

        //validate
        if(!name){
            next('please provide the name')
        }
        if(!email){
            next('please provide the email')
        }
        if(!password){
            next('please provide the password')
        }

        //check and store data
        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'email already exists'
            })
        }

        //store data
        const newUser={
            name:name,
            email:email,
            password:bcrypt.hashSync(password)
        }
        const user= await userModel.create(newUser)
        res.status(200).send({
            success:true,
            message:'user registered successfully',
            user

        })

    }catch(err){
        next('error in registering user')
    }
}

export const loginController= async (req,res,next)=>{
    try{
        const {email,password} = req.body
        if(!email || !password){
            next('provide all fields')
        }
        const user= await userModel.findOne({email})
        if(!user){
            next('invalid email')
        }
        const isPassword=bcrypt.compareSync(password,user.password)
        if(!isPassword){
            next('Invalid password')
        }
        res.status(200).json({
            success:true,
            message:'Login Successfully',
            user
        })
    }catch(err){
        next('Cannot Login')
    }
}