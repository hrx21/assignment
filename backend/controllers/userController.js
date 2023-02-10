const User = require('../models/user')
const { getErrorMessage } = require('../utils')

const add_user = async(req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
       return res.status(201).json({user})
    } catch (error) {
        return res.status(500).json({error: getErrorMessage(err)})
    }
} 

const get_single_user = async(req, res) => {
    try {
        const user = await User.aggregate([
            {$match: {_id: ObjectId(req.params.id)}}
        ])
        return res.status(201).json({user})
    } catch (error) {
        return res.status(500).json({error: getErrorMessage(err)})
    }
}

const get_all_user = async(req, res) => {
    try {
        const user = await User.find({})
        return res.status(201).json({user})
    } catch (error) {
        return res.status(500).json({error: getErrorMessage(err)})   
    }
}

const delete_user = async(req, res) => {
    try {
        const user = await User.findByIdAndDelete({_id: req.params.id})
        return res.status(201).json({user})
    } catch (error) {
        return res.status(500).json({error: getErrorMessage(err)})
    }
}

const update_user = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate({_id: req.params.id}, {$set:req.body}, {new:true})
        return res.status(201).json({user})
    } catch (error) {
        return res.status(500),json({error:getErrorMessage(err)})
    }
}

module.exports = {add_user, get_single_user, get_all_user, delete_user, update_user}