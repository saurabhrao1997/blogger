import express from "express";
import cors from 'cors';
 import data from "./data.js";
import  "./mongoDB/mongoServer.mjs";
import  {channelValidation}  from "./validation/channel.mjs";
import {ChannelModal,LetestNewsModal,RoleModal} from "./Modal/channel.mjs";
import * as yup from "yup";
import { schema } from "./validation/channel.mjs";
// import RegisterModal from "./Modal/registerModal.mjs";
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


app.post("/login",(req,res)=>{
   
  ChannelModal.find({email:req.body.email}).then((result)=>{
      // console.log("result",result.length)
      if(result.length > 0){
        
        res.status(200).json({msg:"login successful",data:result[0]})
      }else{
        res.status(404).json({msg:"email and password is not exist",status:404})
      }
    
    }).catch((errr)=>{
        res.json(404).json({msg:"email and password is not exist",error:errr})
    })

})
app.get("/news",(req,res)=>{
  LetestNewsModal.find().then((result)=>{
      //  console.log("result",result)
       if(result.length > 0){
        res.status(200).json({data:data,letestnews:result})
       }else{
        res.status(200).json(data)
       }
  
  })
  
})
app.get("/details/:id",(req,res)=>{
console.log("parems",req.params.id)
LetestNewsModal.findById(req.params.id).then((result)=>{
   res.status(200).json({data:result})
}).catch((err)=>{
  res.status(400).json({massege:"some things went wrong"})

})
  
})
app.post("/api",(req,res)=>{
  // console.log("res",req.body)
  
  const letestNewsModal  = new LetestNewsModal();
  letestNewsModal.title = req.body.title
  letestNewsModal.image = req.body.image

  letestNewsModal.subtitle = req.body.subtitle
  letestNewsModal.discription = req.body.discription
  letestNewsModal.type = req.body.type

  letestNewsModal.save()
  res.status(200).json({status:"sucssesfully save new api on db",data:req.body})


})

app.get("/userlist",(req,res)=>{
  ChannelModal.find().then((result)=>{
    res.status(200).json({data:result})

  }).catch((err)=>{
    res.status(404).json({error:err})
  })
 
})

app.post("/register",channelValidation(schema),(req,res,next)=>{
   
     const channelModal  = new ChannelModal()
     channelModal.user = req.body.user
     channelModal.name = req.body.name
     channelModal.lname = req.body.lname
     channelModal.email = req.body.email
     channelModal.phone = req.body.phone
     channelModal.password = req.body.password
     channelModal.conformPassword = req.body.conformPassword
     channelModal.save()
     res.status(200).json({status:"sucssesfully register",data:channelModal})
})

app.post("/role",(req,res)=>{
  console.log(req.body)

res.status(200).json({status:"sucssesfully role set",data:req.body})


})

app.listen(5000,()=>{
    console.log("hello i am working on port 5000")
})




