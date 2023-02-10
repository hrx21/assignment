const Company = require('../models/company')

const add_company = async(req, res) => {
    try{
        const company = new Company(req.body)
        console.log(company)
        await company.save()
        return res.status(201).json({company})
    }
    catch(err){
        return res.status(500).json({err})
    }
}

module.exports = {add_company}

