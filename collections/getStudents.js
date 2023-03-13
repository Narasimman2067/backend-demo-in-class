import { ObjectId } from "mongodb"
import {client} from "../db.js"


export function getAllStudents (req){
    return client
    .db("zen")
    .collection("classes")
    // use the req.query in one method to find a specific input given
    .find(req.query)
    .toArray()
}

export function getStudentsByParams(id){
    return client
  .db("zen")
  .collection("classes")
  .findOne({_id:new ObjectId(id)})
}