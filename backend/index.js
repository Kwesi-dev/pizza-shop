const express = require("express")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const dontev = require("dotenv")
const cors = require("cors")
dontev.config()
const app = express()

app.use(express.json())
app.use(cors())

//connect to database
mongoose.connect(process.env.MONGODB_URL)
 .then(() => console.log("connected to db"))
 .catch((err) => console.log(err))


//routes
app.use("/api/auth", authRoute)

//listen to port Number
app.listen(5000, () => {
    console.log("backend server running")
})