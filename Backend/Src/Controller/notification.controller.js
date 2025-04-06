import { notification } from "../model/notification.model.js";


const getallnotifs = async (req, res) => {
    try {
      const notifs = await notification.find({ userId: req.locals });
      return res.send(notifs);
    } catch (error) {
      res.status(500).send("Unable to get all notifications");
    }
  };
  
  module.exports = {
    getallnotifs,
  };
  