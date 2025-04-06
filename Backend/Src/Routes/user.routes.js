import {Router} from "express";
import {changeCurrentPassword, loginUser, logoutUser, registerUser} from "../Controller/user.controller.js";
import {upload} from "../Middleware/multer.middleware.js";
import { verifyJwt } from "../Middleware/auth.middleware.js";

const router = Router()
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)
router.route("/changepassord").put(changeCurrentPassword)

export default router
