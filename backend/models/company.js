const mongoose = require('mongoose')
const Schema = mongoose.Schema

let validateEmail = function(email) {
    var em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return em.test(email)
};

const CompanySchema = new Schema ({
    name: {
        type: String,
        required: "Please Enter Name!"
    },
    email:{
        type: String,
        validate: validateEmail
    },
    logo:{
        type: String
    },
    website:{
        type: String
    }
}, {timestamps: true})

const Company = mongoose.model('Company', CompanySchema)

module.exports = Company
