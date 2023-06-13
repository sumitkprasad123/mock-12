const express = require("express")
const jobsRouter = express.Router()
const {JobsModel}  = require("../model/Jobs.model")

jobsRouter.get("/",async(req,res) => {
    try{
      const jobs = await JobsModel.find()
      res.status(200).send(jobs)
    } catch(err){
        res.status(400).send({"msg":err.message})
    }
}) 

jobsRouter.post("/add",async(req,res) => {
    try{
      const jobs = new JobsModel(req.body)
      await jobs.save()
      res.status(200).send({"msg":"job has been added"})
    } catch(err){
        res.status(400).send({"msg":err.message})
    }
}) 

module.exports = {
    jobsRouter
}