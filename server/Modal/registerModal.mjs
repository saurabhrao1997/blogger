import Mongoose from "mongoose";



const RegisterModal = Mongoose.Schema({
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

const registerModal = Mongoose.model("Channel",RegisterModal)

export default registerModal;