const express = require('express')
const { registrationloginController, verifyOtpController } = require('../controllers/userController')
const _ = express.Router()

_.post('/registrationlog',registrationloginController )
_.post('/verifyotp',verifyOtpController )


module.exports=_