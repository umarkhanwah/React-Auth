import express from 'express'
import { getUserData, handleLogin, handleRegister } from '../controllers/auth.js';
import { fetchUser } from '../middleware/fetchUser.js';


const router = express.Router();


router.post('/signup' , handleRegister)

router.post('/login' , handleLogin)



// Login Required
router.post('/checkUser'  , fetchUser , getUserData)


export default router;