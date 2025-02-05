import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors" 

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()


app.use(cors())
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI

//connecting MongoDB
try {
    mongoose.connect(URI, {
        // try commenting below two line 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Connected to Db")
} catch (err) {
    console.log("Eroor : ", err)
}

// defining routes 
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT)
