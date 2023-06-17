const express = require('express')
const lawyerRouter = express.Router()
const {addLawyer, getLawyerById, getLawyer} = require('../Controllers/lawyer.controller')


lawyerRouter.post("/addLawyer", addLawyer)
lawyerRouter.get("/getLawyer", getLawyer)
lawyerRouter.get("/getLawyerById/:id", getLawyerById)

module.exports = lawyerRouter