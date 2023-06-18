const express  = require('express')
const AppoinmentRoute = express.Router()
const {getByUserEmail,getByLawyerEmail,ConfirmAppointment,DeleteAppointment} = require('../Controllers/appointment.controller')


AppoinmentRoute.get("userEmail",getByUserEmail)
AppoinmentRoute.get("/lawyerEmail",getByLawyerEmail)
AppoinmentRoute.post('/',ConfirmAppointment)
AppoinmentRoute.delete('/delete/:id',DeleteAppointment)
module.exports = AppoinmentRoute