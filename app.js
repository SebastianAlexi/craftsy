const express = require('express')
const app = express()
const path = require('path')
const port = 3030;
app.use(express.static('public'))
let getPath = (dirURL,dirArchivo)=>{
    app.get(`/${dirURL}`,(req,res)=>{
     res.sendFile(path.join(__dirname,`./views/${dirArchivo}.html`))
    })
}  // la funcionalidad acepta que dirURl SEA ESCRITO "home", y dirArchivo SEA ESCRITO "home"

getPath('home','home')
getPath('','home')





app.listen(port,()=>{console.log(`http://localhost:${port}`)})