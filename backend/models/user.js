const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    email: {
        type: String,
        required: "Please Enter Email"
    }, 
    password: {
        type: String,
        required: "Please Enter Password!"
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User