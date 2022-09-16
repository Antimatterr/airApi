import { DATABASE, USER, DB_PORT, PASSWORD, CONNECTION_LIMIT, HOST } from './index.js';
const { createPool } = require('mysql');
const util = require('util');


const pool = createPool({
  port: DB_PORT,
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  connectionLimit: CONNECTION_LIMIT
})



export default pool;