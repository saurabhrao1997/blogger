
import * as yup from "yup";

import { check, validationResult } from'express-validator'


export const schema = yup.object({
    user:yup.string().required(),
    name:yup.string().required(),
    lname:yup.string().required(),
    email:yup.string().required(),
    phone:yup.string().required(),
    password:yup.string().required(),
    conformPassword:yup.string().required(),
  })


export const  channelValidation = (schema) => {
    return async (req,res,next) =>{
        try{
            const value = await schema.validate(req.body)
            console.log("value",value)
            req.body = value;
            next()
          
        }catch(err){
            res.status(400).json({massege:err})

        }

    }
    
    //     try{
    //         console.log("validation value", req.body,value)
    // if(false){
    //     res.json({status:404,massege:value.error})
    // }else{
    //     next()
    // }

    // }catch(err){
    //   res.status(400).json({massege:err})
    // }

        }
    
  

  

//  export const  channelValidation  = async (req,res,next)=>{
    
//   const value = await ChannelModall.userData.isValid(req.body).than((vlaue)=> vlaue)
//   console.log("validation value", value)
//     if(value?.error){
//         res.json({status:404,massege:value.error})
//     }else{
//         next()
//     }
// }