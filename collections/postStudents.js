import { client } from "../db.js";


export function addStudents(data){
    return client
    .db("guvi")
.collection("students")
.insertOne(data)

}

export function addManyStudents(data)
{
    return client
    .db("guvi")
    .collection("students")
    .insertMany(data)

}
