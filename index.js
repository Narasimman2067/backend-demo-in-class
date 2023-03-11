import express from "express";


// invoke that server as a app

import { studentsRouter } from "./routes/student.js";



const app = express();

const PORT =process.env.PORT





// mongo db connection string

// const MONGO_URL = process.env.MONGO_URL

// async  function createConnection(){
// const client =new MongoClient(MONGO_URL)  
//  await client.connect();
//  console.log("mongodb is succesfully connected")

//  return client;
// }
// export const client =await createConnection()




// // middleware tell to use
app.use(express.static("express")); //loading the static file
app.use(express.json());

app.get("/static",(req,res)=>{
    res.sendFile(path.join(__dirname,"express/express.txt"))
})

// use that exported routes

app.use("/students",studentsRouter)

// server generating code

app.listen(PORT,()=>console.log(`server started suceesfully ${PORT}`))

// -------------------------------------------------------------------------------















