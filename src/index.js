const express = require("express")
const mongoose = require("mongoose")
const route = require("./routes/route")
const multer = require("multer")
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://Divyajeetkumar:12345@project1.rxkr5ev.mongodb.net/test")
.then(()=>console.log("mongoDb running successfully"))
.catch(err=> console.log(err))

app.use(multer().any())

app.use("/", route)

app.listen(3001, function(){
    console.log("Express app running on port " + 3001)
})