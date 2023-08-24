import { userRegister,userLogin,userLogout } from "../controllers/userController.js";

import  express  from "express";
const router = express.Router();

router.post('/user-register',userRegister);
router.post('/user-login',userLogin);
router.get('/user-logout',userLogout);

export {router};
