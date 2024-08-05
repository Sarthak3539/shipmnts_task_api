const mongoose=require('mongoose')
  async function connect(){
    try{
       const MONGO_URL='mongodb://0.0.0.0:27017'
    await mongoose.connect(MONGO_URL)
    console.log("connected to db")
    }
    catch(e){
        console.log("error happened")
    }
}


module.exports={connect}