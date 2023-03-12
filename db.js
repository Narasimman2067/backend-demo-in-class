import { MongoClient } from "mongodb";
import Obj from "mongodb"
import dotenv from 'dotenv'


//define the path for .env
dotenv.config({path: "./vars/.env"})



// create connection for mongo_url

const MONGO_URL = process.env.MONGO_URL

async  function createConnection(){
const client =new MongoClient(MONGO_URL)  
 await client.connect();
 console.log("mongodb is succesfully connected")

 return client;
}
export var ObjectId=Obj.ObjectId
export const client =await createConnection()