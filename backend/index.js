const express = require("express")
const mongoose = require("mongoose")
const dontev = require("dotenv")
dontev.config()
const app = express()

//connect to database
mongoose.connect(process.env.MONGODB_URL)
 .then(() => console.log("connected to db"))
 .catch((err) => console.log(err))

//listen to port Number
app.listen( 5000, () => {
    console.log("backend server running")
})