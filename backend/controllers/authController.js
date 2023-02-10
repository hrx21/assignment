const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const { getErrorMessage } = require('../utils')

const register = async(req, res) => {

    if(!req.body.email || !req.body.password){
        return res.status(400).send({
          message: "Email or Password missing."
        })
      }

    // if(req.body.password.length > 8){
    //     return res.status(400).send({
    //         message: "Please Enter a 8 character Password!"
    //     })
    // }

try{
    let hash = await bcrypt.hash(req.body?.password, 10)
        let user = new User ({
            // full_name: req.body.full_name,
            email: req.body.email,
            // phone: req.body.phone,
            password: hash
        })
        
         await user.save()
         let token = jwt.sign({user}, 'verySecretValue', {expiresIn: '1h'})
          return  res.json({
                message: 'User Added Successfully!',
                token,
                user
            })
        }
        catch(err){
          return res.json({
            message:getErrorMessage(err)
            })
        }
}

const login = async(req,res) => {

    if(!req.body.email || !req.body.password){
        return res.status(400).send({
          message: "Email or Password missing."
        })
      }

    if(req.body.password.length > 8){
        return res.status(400).send({
            message: "Please Enter a 8 character Password!"
        })
    }
    
    let email = req.body.email
    let password = req.body.password

   const user = await User.findOne({email:email})
   
       if (user) {
         let match = bcrypt.compare(password, user.password)
         if (match) {
            let token = jwt.sign({user}, 'verySecretValue', {expiresIn: '1h'})
            return res.json({
                message: 'Successfully Logged in!',
                token,
                user
            })
        } 
        else{
           return res.json({
                message: 'Incorrect Password!'
            })
        }
       }else{
          return res.json({
               message: 'No User Found!'
           })
       }
}

module.exports = {register, login}