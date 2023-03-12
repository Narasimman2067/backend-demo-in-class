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
  const studentsData = await getAllStudents(req);
  // status code 200= ok
  res.status(200).json(studentsData);
});

// using query parameter to find the data
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  // use find key word instead of filter to remove string
  const students = await getStudentsByParams(id);
  res.status(200).send(students);
});

// to add a data using post

// to  add or create a data
router.post("/", async (req, res) => {
  const newData = req.body;
  const result = await addStudents(newData);

  res.status(201).send(result);
});

// to add many data use insertMany method
router.post("/many", async (req, res) => {
  const newData2 = req.body;
  const result2 = await addManyStudents(newData2);

  res.status(201).send(result2);
});

// to edit and update  the data using put

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updateStudents = req.body;
  const result = await editAndUpdateStudents(id, updateStudents);

  res.status(200).send(result);
});

//to delete a data using delete method

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deleteStudents = await deleteOneStudents(id);
  res.status(201).send(deleteStudents);
});

export const studentsRouter = router;
