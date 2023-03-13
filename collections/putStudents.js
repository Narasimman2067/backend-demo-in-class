import { ObjectId } from "mongodb";
import { client } from "../db.js";

export function editAndUpdateStudents(id,updateStudents){
    return client
    .db("zen")
  .collection("classes")
  .updateOne(
      {_id:new ObjectId(id)},
      {$set:updateStudents}
  )
}