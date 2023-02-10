const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmployeeSchema = new Schema ({
    first_name: {
        type: String,
        required: "Please Enter First Name",
    },
    last_name: {
        type: String,
        required: "Please Enter Last Name",
    }
}, {timestamps: true})

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee