const mongoose=require('mongoose')


const file=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    parent:{
        type:String,
        required:true
    },
    istxt:{
        type:Boolean,
        
    }
})

module.exports= mongoose.model('File',file)
