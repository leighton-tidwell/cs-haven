import { default as expressSession } from "express-session";
import { env } from "./env.config.js";
import { sequalizeSessionStore } from "./store.config.js";

export const session = expressSession({
  secret: env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  store: sequalizeSessionStore,
  cookie: {
    domain: "cs-haven.com",
    maxAge: 3_600_000,
  },
});
