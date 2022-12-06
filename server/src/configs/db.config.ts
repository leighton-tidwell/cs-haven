import { Sequelize } from "sequelize";
import { env } from "./env.config.js";

export const database = new Sequelize({
  dialect: "mysql",
  host: env.MYSQL_HOST,
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  port: parseInt(env.MYSQL_PORT),
});
