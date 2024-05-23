import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenSetCookie from "../utils/generateToken.js";

export const signup = async(req ,res )=>{
    try{
        const {fullName ,username , password,confirmPassword , gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Password donot Match"})
        }

        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({error:"Username already exixts"});
        }

        // hashing password
         const salt = await bcryptjs.genSalt(10);
         const hashedPassword   = await bcryptjs.hash(password , salt)


    const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic =`https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
        fullName,
        username,
        password : hashedPassword,
        confirmPassword,
        gender,
        profilePic : gender === "male" ? boyProfilePic : girlProfilePic
    })

    

    if(newUser){
        generateTokenSetCookie(newUser.id , res);
        await newUser.save();

        res.status(200).json({
            _id : newUser.id ,
            fullName : newUser.fullName,
            username : newUser.username,
            profilePic : newUser.profilePic
        })
    }
    else{
        res.status(400).json({error :"Failed to create user"})
    }
    }
    catch(err){
        console.log("Error in Signup Controller",err.message)
        res.status(500).json({error : "Internal Server Error"})
    }
}



export const login = async(req ,res )=>{
   try{
      const {username , password} = req.body;

      const user  = await User.findOne({username})

      const isPasswordValid  =  await bcryptjs.compare(password , user?.password || "")

      if(!user || !isPasswordValid){
        res.status(400).json({error: "Invalid Credentials"})
      }

      generateTokenSetCookie(user.id , res);

      res.status(200).json({
            _id : user.id,
            fullName : user.fullName,
            profilePic : user.profilePic
        })
   }
   catch(err){
    console.log("Error in Login Controller", err.message)
    res.status(500).json({error :"Internal Server Error"})
   }
}

export const logout = (req ,res )=>{   
    try{
        res.cookie("jwt", "", {
            magAge : 0
        })
        res.status(200).json({message : "Logged Out Successfully"})
    }
    catch(err){
        console.log("Error in Logout Controller",err.message)
        res.status(500).json({error : "Internal Server Error"})
    }
}


  