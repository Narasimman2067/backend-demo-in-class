import { ObjectId } from "mongodb";
import { client } from "../db.js";

export function editAndUpdateStudents(id,updateStudents){
    return client
    .db("guvi")
  .collection("students")
  .updateOne(
      {_id:new ObjectId(id)},
      {$set:updateStudents}
  )
}