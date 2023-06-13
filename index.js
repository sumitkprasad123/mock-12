const express = require("express")
const {connection} = require("./db")
const {jobsRouter} = require("./Routes/Jobs.routes")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/",jobsRouter)

app.listen(8080,async() => {
    try{
        await connection
        console.log("Connected to The DB")
    }catch(err){
        console.log("Cannot connected to DB")
    }
    console.log("server is running on port 8080")
})