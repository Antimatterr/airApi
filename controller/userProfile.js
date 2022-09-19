import Joi from "joi";
import pool from "../config/database"
import bcrypt from "bcrypt";
const util = require('util');


const query = util.promisify(pool.query).bind(pool);

const userProfile = {

  async register(req, res, next) {

    const profileSchema = Joi.object({
      uid: Joi.number().required(),
      username: Joi.string().min(3).max(50).required(),
      role: Joi.string().min(3).max(30).required(),
      pin: Joi.number().required()
    });

    const { error } = profileSchema.validate(req.body);

    if (error) {
      return res.status(422).json({ status: 0, message: error.message })
    }

    try {

      const user = await query(`select uid from users WHERE uid = ${req.body.uid}`);
      // console.log(user.length)
      if (!user.length) {
        await query(`insert into users(uid, username, role, pin) values(?, ?, ?, ?)`, [
          req.body.uid,
          req.body.username,
          req.body.role,
          req.body.pin,
        ]);

        return res.status(201).json({ status: 1, message: "PROFILE_CREATED" });
      }
      else {
        return res.status(409).json({ status: 0, message: "DUP_ENTRY" })
      }
    } catch (error) {
      return res.status(500).json({ status: 0, message: error.code })
    }

  },

  async removeProfile(req, res, next) {
    const removeSchema = Joi.object({
      uid: Joi.number().required()
    });

    const { error } = removeSchema.validate();


    if (error) {
      return res.status(422).json({ status: 0, message: error.message })
    }

    try {

      const user = await query(`select uid from users WHERE uid = ${req.body.uid}`);
      // console.log(user.length)
      if (user.length) {
        await query(`update users set delete_status = 1 where uid = ${req.body.uid}`);
        return res.status(201).json({ status: 1, message: "PROFILE_REMOVED" });
      }
      else {
        return res.status(409).json({ status: 0, message: "PROFILE_NOT_EXIST" })
      }
    } catch (error) {
      return res.status(500).json({ status: 0, message: error.code })
    }



  }
}

export default userProfile;