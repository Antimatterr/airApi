import Joi from "joi";
import pool from "../config/database"
import bcrypt from "bcrypt";
const util = require('util');


const query = util.promisify(pool.query).bind(pool);

const createProfile = {

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
      const result = await query(`insert into users(uid, username, role, pin) values(?, ?, ?, ?)`, [
        req.body.uid,
        req.body.username,
        req.body.role,
        req.body.pin,
      ]);

      return res.json({ status: 1, message: "profile created" });

    } catch (err) {
      return res.status(409).json({ status: 0, message: 'duplicate entry' })
    }

  }

}

export default createProfile;