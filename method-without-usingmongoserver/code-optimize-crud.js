import express from "express";
import {client} from "../db.js"
import { ObjectId } from "mongodb";


const router =express.Router();

// all details of students

router.get("/",async (req,res)=>{
  console.log(req.query)
  // if age is in number so we use parseInt for age
  if(req.query.age){
      req.query.age = +req.query.age;
  }
  const studentsData = await client
  .db("guvi")
  .collection("students")
  // use the req.query in one method to find a specific input given
  .find(req.query)
  .toArray()
  // status code 200= ok
res.status(200).json(studentsData)

})

// using query parameter to find the data
router.get("/:id",async(req,res)=>{
    const {id}=req.params;
  
    console.log(req.params)
    // use find key word instead of filter to remove string
  const students =await client
  .db("guvi")
  .collection("students")
  .findOne({_id:new ObjectId(id)})
    res.status(200).send(students)
})

// to add a data using post

// to  add or create a data
router.post("/",async (req,res)=>{
  const newData =req.body
const result = await client
.db("guvi")
.collection("students")
.insertOne(newData)
res.status(201).send(result)


})

// to add many data use insertMany method
router.post("/many",async (req,res)=>{
  const newData2 =req.body
const result2 = await client
.db("guvi")
.collection("students")
.insertMany(newData2)
res.status(201).send(result2)


})

// to edit and update  the data using put

router.put("/:id",async (req,res)=>{
  const {id}=req.params
  console.log(req.query)
  const updateStudents = req.body
  const result = await client
  .db("guvi")
  .collection("students")
  .updateOne(
      {_id:new ObjectId(id)},
      {$set:updateStudents}
  )
  res.status(200).send(result)
});

//to delete a data using delete method

router.delete("/:id",async(req,res)=>{
  const {id}=req.params
  console.log(req.params)
 const deleteStudents =await client
 .db("guvi")
 .collection("students")
 .deleteOne({_id:new ObjectId(id)})
 res.status(201).send(deleteStudents)
})


export const studentsRouter =router