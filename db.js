const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://sumit:sumitkprasad@cluster0.3qfcj4t.mongodb.net/masai-jobs?retryWrites=true&w=majority")

module.exports = {
    connection
}