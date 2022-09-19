import express from "express"
// import controllers
import { userProfile } from "../controller";
// import middleware or auth

const router = express.Router();


router.post('/register', userProfile.register);

export default router