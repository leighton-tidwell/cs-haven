import sequalizeStore from "express-session-sequelize";
import session from "express-session";
import { database } from "./db.config.js";

export const SessionStore = sequalizeStore(session.Store);

export const sequalizeSessionStore = new SessionStore({
  db: database,
});
