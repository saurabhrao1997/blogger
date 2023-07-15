

import  mongoose from  "mongoose";

    const URL = "mongodb+srv://saurabh:JAhNKqtrRd24cMlF@saurabh.cfm0x.mongodb.net/?retryWrites=true&w=majority"


    const connectionParems = {
        useNewUrlParser :true,
        useUnifiedTopology : true
    }
    
    mongoose.connect(URL,connectionParems).then(()=>{
        console.info("connected to the DB")
    }).catch((err)=>{
        console.log("Error :",err)
    })
    
 

