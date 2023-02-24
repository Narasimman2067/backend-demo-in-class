const fs = require ("fs")

const content ="new file mad e in a path backend1"
fs.writeFile("./backend1.txt",content,(err)=>{
    try {
        console.log("sucesfully added")
    } catch (error) {
        
        console.log(error)
    }
})
const content1 ="new file made in a path backend2"
fs.writeFile("./backend2.txt",content1,(err)=>{
    try {
        console.log("sucesfully added")
    } catch (error) {
        
        console.log(error)
    }
})
const content2 ="new file made in a path backend3"
fs.writeFile("./backend3.txt",content2,(err)=>{
    try {
        console.log("sucesfully added")
    } catch (error) {
        
        console.log(error)
    }
})
const content3 ="new file made in a path backend4"
fs.writeFile("./backend4.txt",content3,(err)=>{
    try {
        console.log("sucesfully added")
    } catch (error) {
        
        console.log(error)
    }
})
const content4 ="new file made in a path backend5"
fs.writeFile("./backend5.txt",content4,(err)=>{
    try {
        console.log("sucesfully added")
    } catch (error) {
        
        console.log(error)
    }
})

fs.readdir("./",(err,directory)=>{
    try {
        console.log("Directory",directory)
    } catch (error) {
        
        console.log(error)
    }
}
)

