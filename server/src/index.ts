import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import passport from "passport";
import { Strategy } from "passport-steam";
import session from "express-session";

const app = express();
const port = process.env.PORT;

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new Strategy(
    {
      returnURL: `${process.env.HOST}index.html#VIP?success=true`,
      realm: process.env.HOST,
      apiKey: process.env.LOCAL_STEAM_API_KEY,
    },
    (
      identifier: string,
      profile: Record<string, any>,
      done: (arg0: any, arg1: object) => void
    ) => {
      // TODO: Upsert user into database
      profile.identifier = identifier;
      return done(null, profile);
    }
  )
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      domain: ".cs-haven.com",
      maxAge: 3_600_000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send(req.user);
});

app.get("/success", (req, res) => {
  res.send({ success: true });
});

app.get("/fail", (req, res) => {
  res.send({ success: false });
});

app.get("/api/auth/verify", (req, res) => {
  console.log("received request to verify auth");
  console.log(req.user);
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.send(req.user);
  } else {
    res.send({ success: false });
  }
});

app.get(
  "/api/auth/steam",
  passport.authenticate("steam", { failureRedirect: "/fail" }),
  (req, res) => {
    res.send({ success: true });
  }
);

app.get(
  "/api/auth/steam/return",
  passport.authenticate("steam", { failureRedirect: "/fail" }),
  (req, res) => {
    res.redirect("/");
  }
);

app.listen(port, () => {
  console.log(`CS Haven API listening at http://localhost:${port} 🚀 `);
});
