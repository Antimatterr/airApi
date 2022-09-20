import express from "express";
import { APP_PORT_LOCAL, APP_PORT_DEV, APP_ENV } from "./config";
import pool from "./config/database";
import routes from "./routes"

const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs')

const swaggerJsDocs = YAML.load('./api.yaml')

const morgan = require('morgan')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))

app.use(morgan('combined'));


app.use('/api', routes);

const portNo = APP_ENV == "dev" ? APP_PORT_DEV : APP_PORT_LOCAL;
app.listen(portNo, () => {
  console.log(`server running on ${portNo}`);
})