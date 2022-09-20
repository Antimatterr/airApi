import { DATABASE_LOCAL, USER_LOCAL, DB_PORT_LOCAL, PASSWORD_LOCAL, CONNECTION_LIMIT_LOCAL, HOST_LOCAL, DATABASE_DEV, USER_DEV, DB_PORT_DEV, PASSWORD_DEV, CONNECTION_LIMIT_DEV, HOST_DEV, APP_ENV } from './index.js';
const { createPool } = require('mysql');
const util = require('util');

const port = APP_ENV == "dev" ? DB_PORT_DEV : DB_PORT_LOCAL
const host = APP_ENV == "dev" ? HOST_DEV : HOST_LOCAL
const user = APP_ENV == "dev" ? USER_DEV : USER_LOCAL
const password = APP_ENV == "dev" ? PASSWORD_DEV : PASSWORD_LOCAL
const database = APP_ENV == "dev" ? DATABASE_DEV : DATABASE_LOCAL
const connectionLimit = APP_ENV == "dev" ? CONNECTION_LIMIT_DEV : CONNECTION_LIMIT_LOCAL


const pool = createPool({
  port: port,
  host: host,
  user: user,
  password: password,
  database: database,
  connectionLimit: connectionLimit
})



export default pool;