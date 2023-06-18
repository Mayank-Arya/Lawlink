const AppointmentModel = require('../Models/appointment.model')




const getByUserEmail = async(req,res) => {
    try{
    const {email} = req.query
     const data = await AppointmentModel.find({userEmail:email})
     res.status(200).send(data)
    }
    catch(err){
        res.status(401).send({msg: err.message})
        console.log(err)
    }
}

const getByLawyerEmail = async (req, res) => {
    try {
      const email = req.query.email;
      console.log(email)
      const data = await AppointmentModel.find({lawyerEmail: email });
      res.status(200).send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Internal server error' });
    }
  };
  


const ConfirmAppointment = async (req,res)=> {
    try{
       payload = req.body;
    const book = new AppointmentModel(payload)
     await book.save()
    res.status(200).send({msg: "Appoinment confirmed"})
    }
    catch(err){
        res.status(401).send({msg: err.message})
        console.log(err)
    }
}

const DeleteAppointment = async(req,res) => {
    try{
      const data = await AppointmentModel.findByIdAndDelete(req.params.id)
      res.status(200).send({msg: "Appointment deleted"})
    }
    catch(err){
        res.status(401).send({msg: err.message})
        console.log(err)
    }
}



module.exports = {getByUserEmail,getByLawyerEmail,ConfirmAppointment,DeleteAppointment}