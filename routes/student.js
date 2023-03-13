import express from "express";
import { getAllStudents } from "../collections/getStudents.js";
import { addManyStudents, addStudents } from "../collections/postStudents.js";
import { editAndUpdateStudents } from "../collections/putStudents.js";
import { deleteOneStudents } from "../collections/deleteStudents.js";

const router = express.Router();

// all details of students

router.get("/", async (req, res) => {
  // if age is in number so we use parseInt for age
  if (req.query.age) {
    req.query.age = +req.query.age;
  }
  try {
    const studentsData = await getAllStudents(req);
    if(studentsData<=0){
      res.status(404).send({data:"no content available"})
      return
    }
     // status code 200= ok
    res.status(200).send({data:studentsData})
  } catch (error) {
    console.log(error)
    res.status(500).send({error_occured:"internal server error"})
   
  }

});

// using query parameter to find the data
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const studentsData = await getStudentsByParams(id);
    // error handling
    if(!studentsData) {
       res.status(400).send({data:"user not found"})
      return
      }
  res.status(200).send({data:studentsData});
  } catch (error) {
    console.log(error)
    res.status(500).send({error_data:"Internal server error"})
  }
 // use find key word instead of filter to remove string
  
});

// to add a data using post

// to  add or create a data
router.post("/", async (req, res) => {
  
  try {
    
    const newData = req.body;
    const result = await addStudents(newData);
    if(newData.length<=0){
     res.status(404).send({data:"user not provided"})
     return 
    }
      res.status(201).send({result:"data added succesfully "});
    
    } catch (error) {
    console.log(error)
    res.status(500).send({error:"user provided data is not correct"})
    
  }

});

// to add many data use insertMany method
router.post("/many", async (req, res) => {

  try {
    const newData2 = req.body;
    if(newData2.length<=0){
      res.status(404).send({data:"user not provided"})
      return
    }
    const result2 = await addManyStudents(newData2);
  
    res.status(201).send({result2:"bulk data added successfully"});
  } catch (error) {
    console.log(error)
    res.status(500).send({error:"user provided data is not correct"})
  }
 
});

// to edit and update  the data using put

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateStudents = req.body;
    const result = await editAndUpdateStudents(id, updateStudents)
    if(!updateStudents){
      res.status(304).json({data:"user not modified"})
     return result
    }
    res.status(200).send({data:"data updated succesfully"});
  } catch (error) {
    console.log(error);
    res.status(500).send({error:"user provided data is not correct"})
  }
 
});

//to delete a data using delete method

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
try {
  
  const deleteStudents = await deleteOneStudents(id);
  // if(id!=deleteStudents){
  //   res.status(404).json({data:"no content provided"})
  //   return
  // }
    res.status(200).send(deleteStudents);
  } catch (error) {
  res.status(500).json({error:"error while deleting"})
}
  
});

export const studentsRouter = router;
