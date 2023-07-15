
import Mongoose from "mongoose";
import * as yup from "yup";

const ChannelModall = Mongoose.Schema({
    user:{
        type:String,
        required:true,
        trim:true,
    },
    name :{
        type:String,
        required:true,
        trim:true,
    },
    lname :{
        type:String,
        required:true,
        trim:true,
    },
    email :{
        type:String,
        required:true,
        trim:true,
    },
    phone :{
        type:Number,
        required:true,
        trim:true,
    },
    password :{
        type:String,
        required:true,
        trim:true,
    },
    conformPassword:{
        type:String,
        required:true,
        trim:true,

    },

})
const LetestNews = Mongoose.Schema({
   title : {
    type:String,
    required:true,
    trim:true,
},
image : {
    type:String,
    required:true,
    trim:true,
},
subtitle:{
    type:String,
    // required:true,
    trim:true,
},
discription:{
    type:String,
    required:true,
    trim:true,
},
type:{
    type:String,
    required:true,
    trim:true,
},
})

const RoleSchema =Mongoose.Schema({
    home:{
        type:Boolean,
    },
    blogs:{
        type:Boolean,
    },
    editblog:{
        type:Boolean,
    },
    role:{
        type:Boolean,
    },
    contact:{
        type:Boolean,
    },
    name:{
        type:String
    },
    userId:{
        type:String
    }

})
const ChannelModal = Mongoose.model("Channel",ChannelModall)
const LetestNewsModal = Mongoose.model("LetestNews",LetestNews)
const RoleModal = Mongoose.modelNames("Role",RoleSchema)
export { ChannelModal,LetestNewsModal,RoleModal}



