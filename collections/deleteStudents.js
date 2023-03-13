import { ObjectId } from "mongodb";
import { client } from "../db.js";

export function deleteOneStudents(id){
    return client
    .db("zen")
 .collection("classes")
 .deleteOne({_id:new ObjectId(id)})

}