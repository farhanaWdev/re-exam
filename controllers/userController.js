// const loginUser = require('../models/userModel')
// const otpGenerator = require('otp-generator')
// const nodemailer = require("nodemailer");
// const transporter = require('../utils/emailSender')

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// let registrationloginController = async (req,res)=>{
//     const{email,password}=req.body
//     if(!email || !password ){
//         return res.status(400).json({
//             success:false,
//             message:"fill all the fields"
//         })
//     }

//     const existingUser = await loginUser.findOne({email})
//     if(existingUser){
//               return res.status(400).json({
//             success:false,
//             message:"User already exists"
//         })
        
//     }
//       if(emailRegex.test(email)){
//               return res.status(400).json({
//             success:false,
//             message:"Use a valid email"
//         })
        
//     }
//          if(passwordRegex.test(password)){
//               return res.status(400).json({
//             success:false,
//             message:"Use a valid strong pass"
//         })
        
//     }
//     let otp =otpGenerator.generate(6);

//  const info = await transporter.sendMail({
//     from: '"Farhana" farha168na@gmail.com', 
//     to: email, 
//     subject: "verify otp", 
//     html: `<b>your otp${otp}</b>`, 
//   });

//   const user  =new loginUser({
//     email:email,
//     password:password,
//     otp:otp
//   }).save()
// }


// let verifyOtpController = async (req,res)=>{
//     const{email,otp}=req.body
//     if(!email || !otp){
//         return res.status(400).json({
//             success:false,
//             message:"fill all the fields"
//         })
//     }

//   const existingUser = await loginUser.findOne({email})
//     if(!existingUser){
//               return res.status(400).json({
//             success:false,
//             message:"create a new acc"
//         })
        
//     }

//   if(existingUser.otp !==otp){
//     await loginUser.findByIdAndDelete({email})
//   }

//    if(existingUser.otp ===otp){
//     await loginUser.findByIdAndUpdate({email},{otp:""})
//   }

//   res.status(200).json({
//     success:true,
//     message:"logged in"
//   })

// }

// module.exports = {registrationloginController ,verifyOtpController}