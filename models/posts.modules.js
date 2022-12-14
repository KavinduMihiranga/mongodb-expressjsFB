const { Timestamp } = require('mongodb')
const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
   

    
})

module.exports=mongoose.model('Post',postSchema)