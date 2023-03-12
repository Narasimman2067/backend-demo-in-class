import { ObjectId } from "mongodb";
import { client } from "../db.js";

export function deleteOneStudents(id){
    return client
    .db("guvi")
 .collection("students")
 .deleteOne({_id:new ObjectId(id)})

}