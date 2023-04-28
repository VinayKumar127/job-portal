import Express from "express";
import { registerController,loginController } from "../controllers/authController.js";


const route=Express.Router()
route.post('/register',registerController)
route.post('/login',loginController)
export default route