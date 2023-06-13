const mongoose = require("mongoose")

// jobs schema

const jobsSchema = mongoose.Schema({
        company: String,
		postedAt: String,
		city: String,
		location: String,
		role: String,
		level: String,
		contract: String,
		position: String,
		language: String
},{
    versionKey:false
})

const JobsModel = mongoose.model("jobs",jobsSchema)

module.exports = {
    JobsModel
}

