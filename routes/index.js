import express from "express"
// import controllers
import { createProfile } from "../controller";
// import middleware or auth

const router = express.Router();


router.post('/register', createProfile.register);

export default router