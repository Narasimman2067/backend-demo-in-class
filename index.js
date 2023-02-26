
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
// // middleware tell to use
app.use(express.static("express")); //loading the static file
app.use(express.json());

app.get("/static",(req,res)=>{
    res.sendFile(path.join("__dirname,express/express.txt"))
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

// server generating code

app.listen(PORT,()=>console.log(`server started suceesfully localhost:${PORT}`))

// -------------------------------------------------------------------------------















