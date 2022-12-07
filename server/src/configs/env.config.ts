import * as dotenv from "dotenv";
dotenv.config();

export const env = {
  MYSQL_USERNAME: process.env.MYSQL_USERNAME,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: process.env.MYSQL_PORT,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  STEAM_API_KEY: process.env.STEAM_API_KEY,
  SESSION_SECRET: process.env.SESSION_SECRET,
  API_ENDPOINT: process.env.API_ENDPOINT,
  CLIENT_ENDPOINT: process.env.CLIENT_ENDPOINT,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
};
