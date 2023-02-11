const express = require('express')
const multer = require('multer')
const companyController = require('../controllers/companyController')
const Company = require('../models/company')
const path = require('path')
// const { upload } = require('../server')

const router = express.Router()

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, '/storage/app/public/'));
//     },
//     filename: (req, file ,cb) => {
//         console.log(file)
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const fileFilter=(req, file, cb)=>{
//     if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
//         cb(null,true);
//     }else{
//         cb(null, false);
//     }
// }

// const upload = multer({storage, fileFilter})

// router.post('/',
// //  upload.single('image') ,
//  function(req, res) {
//     console.log('rrr',req.file)
//     var companyDetails = new Company({
//         // logo: req.file.filename,
//         website: req.body.website,
//         email: req.body.email,
//         name: req.body.name
//     })
// })

router.post('/',  companyController.add_company)
router.get('/', companyController.get_all_company)

// companyDetails.save(function(err, req){
//     if(err) the
// })

module.exports = router