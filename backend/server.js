const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const server = express()
const companyRoute = require('./routes/companyRoute')
const path = require('path')
const multer = require('multer')
const AuthRoute = require('./routes/auth')
const UserRoute = require('./routes/userRoute')
const EmpRoute = require('./routes/empRoute')
const bodyParser = require('body-parser')

require('dotenv').config()

mongoose.set("strictQuery", false);

mongoose.
connect(process.env.DB_KEY,{useNewUrlParser: true, useUnifiedTopology:true})
.then(res => server.listen(7000))
.catch((err) => console.log(err))

server.use(cors({
    origin: 'http://localhost:3000', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

server.use(bodyParser.urlencoded({
    extended: true
}));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/storage/app/public/'));
    },
    filename: (req, file ,cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const fileFilter=(req, file, cb)=>{
    if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
        cb(null,true);
    }else{
        cb(null, false);
    }
  
   }

const upload = multer({storage, fileFilter})

server.use(express.json())  

server.use('/auth', AuthRoute)

server.use('/company', upload.single('image'), companyRoute)

server.use('/user', UserRoute)

server.use('/employee', EmpRoute)

