const {mongoClient, MongoClient} =require ("mongodb")
const express = require("express");
// invoke that server as a app
const app =express();
const PORT =9000;
const path =require("path");
const fs =require("fs")


const currentDir=path.join(__dirname,"express");
console.log(currentDir)
const content ="hi i have created current directory file"
fs.writeFile(`${currentDir}/express.txt`, content,(err)=>{
    try {
        console.log("succesfully file created")
    } catch (error) {
     console.log("file not created")   
    }
}
)

// mongo db connection string
const MONGO_URL = "mongodb://127.0.0.1:27017/products"
const client =new MongoClient(MONGO_URL)  
// const dbName = "products";
async  function createConnection(){
 
 await client.connect();
 console.log("mongodb is succesfully connected")
//  const db = client.db(dbName);
//  const collection = db.collection('products');
 return client;
}
createConnection()
.then(()=>console.log("success"))
.catch(()=>console.log("error"))



// // middleware tell to use
app.use(express.static("express")); //loading the static file
app.use(express.json());

app.get("/static",(req,res)=>{
    res.sendFile(path.join(__dirname,"express/express.txt"))
})

const students =[
    {
        "name": "Narasimman",
        "batch": "B42wd",
        "gender": "male",
        "yearsOfExperience": "1",
        "id": "1"
       },
       {
        "name": "raja",
        "batch": "B42wd",
        "gender": "male",
        "yearsOfExperience": "1",
        "id": "2"
       },
       {
        "name": "rathnam",
        "batch": "B42wd",
        "gender": "male",
        "yearsOfExperience": "1",
        "id": "3"
       },
       {
        "name": "sandya",
        "batch": "B42wd",
        "gender": "female",
        "yearsOfExperience": "1",
        "id": "4"
       }


]

// example for get

app.get("/",(req,res) =>{
// parameter any
res.send("hello i am start the server")
})

// -------------------------------------------------------------------

// use parameter get the data

app.get("/students/:id",(req,res)=>{
    const {id}=req.params;
    console.log(id);
    console.log(req.params)
    // use find key word instead of filter to remove string
    const student =students.find((stud)=> stud.id === id)
    res.send(student)
})

// ------------------------------------------------------------

// to get all datas

app.get("/all/students",(req,res)=>{
res.send(students)

})


// --------------------------------------------------------------
// to get the data using the queryy details
// end point creatiion 
// Query=>  http://localhost:9000/students?name=raja
app.get("/students",(req,res)=>{
    const {name}=req.query
    console.log(req.query)
    const selected1=students .find((stud)=>stud.name == name) 
    // const selected=students.filter((studs)=>studs.gender == gender)   
    res.send(selected1)
    // res.send(selected)

    
    })
// post request



app.post("/students",(req,res)=>{
    const data =
        {
            name: req.body.name,
            batch: req.body.batch,
            gender: req.body.gender,
            yearsOfExperience: req.body.yearsOfExperience,
            id: req.body.id,
           }
    
students.push(data)
res.send(students)

})

// put 

app.put("/students/:id",(req,res)=>{
    const {id}=req.params
    const editStudents=students.find((stud)=>stud.id === id)
    editStudents.name=req.body.name,
    editStudents.batch= req.body.batch,
    editStudents.gender=req.body.gender,
    editStudents.yearsOfExperience=req.body.yearsOfExperience,
    editStudents.id=req.body.id,
console.log(editStudents)
console.log(req.body)
    res.send(students)
})

// delete


app.delete("/students/:id",(req,res)=>{
    const {id}=req.params
    const deleteStudents=students.filter((stud)=>stud.id != id)
    const delstudents = deleteStudents
    try {
        console.log("deleted succesfully")
    } catch (error) {
        console.log("error occcured")
    }
    res.send(delstudents)


})

// server generating code

app.listen(PORT,()=>console.log(`server started suceesfully localhost:${PORT}`))

// -------------------------------------------------------------------------------















