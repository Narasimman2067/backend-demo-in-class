import express from "express";
import { studentsRouter } from "./routes/student.js";
import cors from "cors"



// invoke that server as a app
const app = express();

const PORT =process.env.PORT



// // middleware tell to use
app.use(express.static("express")); //loading the static file
app.use(express.json());

app.get("/static",(req,res)=>{
    res.sendFile(path.join(__dirname,"express/express.txt"))
})

app.use(cors())

// use that exported routes

app.use("/students",studentsRouter)

// server generating code

app.listen(PORT,()=>console.log(`server started suceesfully ${PORT}`))

// -------------------------------------------------------------------------------















