const express = require("express");
const bodyParser = require('body-parser');
const {connect}= require("./db/connect");
const {addFile}=require("./route/createFile")
const cors=require("cors")


const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  })
)

app.use(cors({
    origin:'*'
  }))



app.use('/',addFile)



const server=async()=>{
    await connect();
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }
    
    server()
    