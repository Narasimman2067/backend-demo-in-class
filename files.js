// // HERE THE process.argv is a global function to get the data and to 
// // process the data

const fs =require ("fs");
const os =require ("os");
// const { monitorEventLoopDelay } = require("perf_hooks");
const[, , num1,num2, msg, configPath]=process.argv;

const sum =(n1,n2)=>n1+n2;
console.log(sum(+num1,+num2));
const welcome =(message)=>{
    console.log(`Hi ${message} welcome to node js`)
}
welcome(msg)

 // file reading
fs.readFile("./sample.txt","utf-8",(err,data)=>{
try {
    console.log("file read succesfully")
} catch (error) {
    console.log(error)
}
   
    console.log(data)
})

const content ="make a new file using node path"
// // create a new file for writting
fs.writeFile("./newFile.txt",content,(err)=>{
    try {
        console.log("file write succesfully")
    } catch (error) {
        console.log("error ehile written")
    }


    // if(err){
    //     console.log(err)
    // }else{
    //     console.log("file Written succesfully")
    // }
})

const newContent = "\n new content added"
// update the file

fs.appendFile("./newFile.txt",newContent,(err)=>{
    try {
        console.log("file update succesfully")
    } catch (error) {
        console.log("error ocured while update")
    }
})

// delete a function
// fs.unlink("./sample.txt",(err)=>{
// try {
//     console.log("file delete succesfully")
// } catch (error) {
//     console.log("error occured while delete")
// }

// })
// whenever its required use sync operation
// but neccessary in production time
// readFilesync,writeFilesync,
// arrange the file in order to sync


// fs.unlinkSync("./sample.txt",(err)=>{
//     try {
//         console.log("file orderly sync succesfully")
//     } catch (error) {
//         console.log("error occured while ordering")
//     }
    
//     })

// to read a whole directory

fs.readdir("./",(err,directory)=>{
    try {
        console.log("Directory",directory)
    } catch (error) {
        console.log(error)
        
    }
})

// to see the os version of our windows

console.log("Os version------",os.version());
console.log("Free Memory------",os.freemem());
console.log("Total Memory------",os.totalmem());
console.log("CPU------",os.cpus());

// date and time extra knowledge things

let time =Date.now()
console.log(time)
let date =new Date();
let utc =date.toUTCString();
let today =date.getDate();
let month =date.getMonth();
let year =date.getUTCFullYear();
console.log("date",date);
console.log("utc",utc)
console.log("all functions are :",date,utc,today,month,year)

// task
