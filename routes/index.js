import express from "express"
// import controllers
import { userProfile } from "../controller";
// import middleware or auth

const router = express.Router();


router.post('/register', userProfile.register);
router.post('/removeUser', userProfile.removeProfile);
router.get('/users', userProfile.users);
router.get('/users/:id', userProfile.user);

export default router