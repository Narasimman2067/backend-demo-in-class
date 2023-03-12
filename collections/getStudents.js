import { ObjectId } from "mongodb"
import {client} from "../db.js"


export function getAllStudents (req){
    return client
    .db("guvi")
    .collection("students")
    // use the req.query in one method to find a specific input given
    .find(req.query)
    .toArray()
}

export function getStudentsByParams(id){
    return client
  .db("guvi")
  .collection("students")
  .findOne({_id:new ObjectId(id)})
}