const mongoose=require('mongoose')


const txtFile=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    contain:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('txtFile',txtFile)
