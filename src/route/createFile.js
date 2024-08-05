const express=require('express')
const file=require('../db/schema/file')
const txtFile=require('../db/schema/txtFile')
const addFile=express.Router()



addFile.get('/',async(req,res)=>{
    try{
        res.send("goo..")
    }
    catch(e){
        res.send("some error occuried")
    }
})

addFile.post('/addfile',async(req,res)=>{
    try{
    console.log(req.body)
   const newfile=new file(req.body)
   await newfile.save()
   res.send(req.body)
    }
    catch(e){
        console.log(e)
    }
})

addFile.get('/getfiles', async (req, res) => {
    try {
        console.log(req.query)
        const files = await file.find({ parent: req.query.parent });
        console.log(files);
        res.send(files);
    } catch (e) {
        console.log("not able to fetch files");
        res.send("some error occurred");
    }
});


addFile.get('/addtxtcontain',async(req,res)=>{
    try{
        const txtname = await file.findOne({ "_id": req.body._id })
        const txt=new  txtFile({contain:req.body.contain,"id":req.body._id})

        await txt.save()
        res.send(txt)
    }
    catch(e){
            res.send("contain is not added")
    }
})


addFile.get('/findtxt',async(req,res)=>{
    try{
        const txt = await txtFile.find({ id: req.body.id });
        res.send(txt)
    }
    catch(e){
        console.log("some error occuried")
        res.send("not able to find txt file")
    }
})

module.exports={addFile}
