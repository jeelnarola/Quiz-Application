const User = require("../models/user.Schema");
const generateTokenAndCookieSet = require("../utils/generateTokenAndCookieSet");

const Register = async(req,res)=>{
    try {
        let {email,password,username,role} = req.body;
        if(!email || !password || !username){
            return res.status(400).json({success:false,message:"All Fields Are Required"})
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){
            return res.status(400).json({success:false,message:"Invalid Email"})
        }

        if(password.length < 6 ){
            return res.status(400).json({success:false,message:"Password must be at least 6 characters"})
        }

        let ExitsEmail = await User.findOne({email:email})
        if(ExitsEmail){
            return res.status(400).json({success:false,message:"Email already exists"})
        }
        const newUser = new User ({
            username,
            email,
            password,
            role
        })
        generateTokenAndCookieSet(newUser._id,res)
        await newUser.save()
        res.status(201).json({success:true,user:{
            ...newUser._doc,
            password:""
        }})
    } catch (error) {
        console.log("Error in Register Controller :- ",error.message)
        res.status(500).json({message:"Internal Error :- ",error})
    }
}

module.exports = {Register}