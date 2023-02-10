const Employee = require('../models/employee')

const add_emp = async(req, res) => {
    try {
        const emp = new Employee(req.body)
        await emp.save()
       return res.status(201).json({emp})
    } catch (err) {
        return res.status(500).json({err})
    }
} 

const get_single_emp = async(req, res) => {
    try {
        const emp = await Employee.aggregate([
            {$match: {_id: ObjectId(req.params.id)}}
        ])
        return res.status(201).json({emp})
    } catch (err) {
        return res.status(500).json({err})
    }
}

const get_all_emp = async(req, res) => {
    try {
        const emp = await Employee.find({})
        return res.status(201).json({emp})
    } catch (err) {
        return res.status(500).json({err})   
    }
}

const delete_emp = async(req, res) => {
    try {
        const emp = await Employee.findByIdAndDelete({_id: req.params.id})
        return res.status(201).json({emp})
    } catch (err) {
        return res.status(500).json({err})
    }
}

const update_emp = async(req, res) => {
    try {
        const emp = await Employee.findByIdAndUpdate({_id: req.params.id}, {$set:req.body}, {new:true})
        return res.status(201).json({emp})
    } catch (err) {
        return res.status(500),json({err})
    }
}

module.exports = {add_emp, get_single_emp, get_all_emp, delete_emp, update_emp}