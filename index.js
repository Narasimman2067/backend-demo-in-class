import { MongoClient } from "mongodb";
import express from "express";
import Obj from "mongodb"
// invoke that server as a app
import dotenv from "dotenv"


dotenv.config()
const app = express();
var ObjectId=Obj.ObjectId



// console.log(path.join(__dirname,"express"))
// const currentDir=path.join(__dirname,"express");
// console.log(currentDir)
// const content ="hi i have created current directory file"
// fs.writeFile(`${currentDir}/express.txt`, content,(err)=>{
//     try {
//         console.log("succesfully file created")
//     } catch (error) {
//      console.log("file not created")   
//     }
// }
// )

// mongo db connection string

const MONGO_URL = process.env.MONGO_URL

async  function createConnection(){
    const client =new MongoClient(MONGO_URL)  
 await client.connect();
 console.log("mongodb is succesfully connected")

 return client;
}
export const client =await createConnection()
.then(()=>console.log("success"))
.catch(()=>console.log("error"))



// // middleware tell to use
app.use(express.static("express")); //loading the static file
app.use(express.json());

app.get("/static",(req,res)=>{
    res.sendFile(path.join(__dirname,"express/express.txt"))
})

// example for get

app.get("/",(req,res) =>{
// parameter any
res.send("hello i am start the server")
})

// -------------------------------------------------------------------

// use parameter get the data

app.get("/students/:id",async(req,res)=>{
    const {id}=req.params;
  
    console.log(req.params)
    // use find key word instead of filter to remove string
  const students =await client
  .db("guvi")
  .collection("students")
  .findOne({_id:new ObjectId(id)})
    res.status(200).json(students)
})

// ------------------------------------------------------------






// --------------------------------------------------------------
// to get the data using the queryy details
// end point creatiion 
// Query=>  http://localhost:9000/students?name=raja
app.get("/students",async (req,res)=>{
    console.log(req.query)
    // if age is in number so we use parseInt for age
    if(req.query.age){
        req.query.age = +req.query.age;
    }
    const studentsData = await (await client)
    .db("guvi")
    .collection("students")
    // use the req.query in one method to find a specific input given
    .find(req.query)
    .toArray()
    // status code 200= ok
res.status(200).json(studentsData)
  
})
// post request


// to  add or create a data
app.post("/students",async (req,res)=>{
    const newData =req.body
const result = await (await client)
.db("guvi")
.collection("students")
.insertOne(newData)
res.status(201).send(result)


})

app.post("/students/many",async (req,res)=>{
    const newData2 =req.body
const result2 = await (await client)
.db("guvi")
.collection("students")
.insertMany(newData2)
res.status(201).send(result2)


})
// put request

// to update a data

app.put("/students/:id",async (req,res)=>{
    const {id}=req.params
    console.log(req.query)
    const updateStudents = req.body
    const result = await (await client)
    .db("guvi")
    .collection("students")
    .updateOne(
        {_id:new ObjectId(id)},
        {$set:updateStudents}
    )
    res.status(200).send(result)


//     const editStudents=students.find((stud)=>stud.id === id)
//     editStudents.name=req.body.name,
//     editStudents.batch= req.body.batch,
//     editStudents.gender=req.body.gender,
//     editStudents.yearsOfExperience=req.body.yearsOfExperience,
//     editStudents.id=req.body.id,
// console.log(editStudents)
// console.log(req.body)
//     res.send(students)
})

// delete


app.delete("/students/:id",async(req,res)=>{
    const {id}=req.params
    console.log(req.params)
   const deleteStudents =await client
   .db("guvi")
   .collection("students")
   .deleteOne({_id:new ObjectId(id)})
   res.status(201).send(deleteStudents)



})

// server generating code

app.listen(9000,()=>console.log(`server started suceesfully 9000`))

// -------------------------------------------------------------------------------















