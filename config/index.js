import dotenv from 'dotenv'
dotenv.config()

export const {
  APP_PORT_LOCAL,
  DB_PORT_LOCAL,
  HOST_LOCAL,
  USER_LOCAL,
  PASSWORD_LOCAL,
  DATABASE_LOCAL,
  CONNECTION_LIMIT_LOCAL,
  APP_PORT_DEV,
  DB_PORT_DEV,
  HOST_DEV,
  USER_DEV,
  PASSWORD_DEV,
  DATABASE_DEV,
  CONNECTION_LIMIT_DEV,
  APP_ENV,
} = process.env;