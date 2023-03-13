import { client } from "../db.js";


export function addStudents(data){
    return client
    .db("zen")
.collection("classes")
.insertOne(data)

}

export function addManyStudents(data)
{
    return client
    .db("zen")
    .collection("classes")
    .insertMany(data)

}
