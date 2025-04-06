import mongoose from "mongoose";
import { User } from "../model/user.model";
import { Appointment } from "../model/appointment.models.js";
import { notification } from "../model/notification.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const bookAppointment = asyncHandler(async(req,res)=>{
    try{
    const appointment = new Appointment({
        userId: req.locals,
        time: req.body.time,
        date: req.body.date,
        doctorId: req.body.doctorId,
    })

    const userNotification =  notification({
        userId: req.locals,
        content:`You booked an appointment with Dr. ${req.body.doctorname} for ${req.body.date} ${req.body.time}`,
    })
    await userNotification.save();

    const user = await User.findById(req.locals);

    const doctornotification = Notification({
      userId: req.body.doctorId,
      content: `You have an appointment with ${user.firstname} ${user.lastname} on ${req.body.date} at ${req.body.time}`,
    });

    await doctornotification.save();

    const result = await appointment.save();
    return res.status(201).send(result);
} catch (error) {
    console.log("error", error)
    res.status(500).send("Unable to book appointment");
  }
})


const completed = async (req, res) => {
    try {
      const alreadyFound = await Appointment.findOneAndUpdate(
        { _id: req.body.appointid },
        { status: "Completed" }
      );
  
      const usernotification = notification({
        userId: req.locals,
        content: `Your appointment with ${req.body.doctorname} has been completed`,
      });
  
      await usernotification.save();
  
      const user = await user.findById(req.locals);
  
      const doctornotification = notification({
        userId: req.body.doctorId,
        content: `Your appointment with ${user.firstname} ${user.lastname} has been completed`,
      });
  
      await doctornotification.save();
  
      return res.status(201).send("Appointment completed");
    } catch (error) {
      res.status(500).send("Unable to complete appointment");
    }
  };


  export  {bookAppointment,completed}