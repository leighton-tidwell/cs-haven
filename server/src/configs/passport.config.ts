import passport from "passport";
import { Strategy } from "passport-steam";

import { env } from "./env.config.js";

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new Strategy(
    {
      returnURL: `${env.API_ENDPOINT}auth/return`,
      realm: env.API_ENDPOINT,
      apiKey: env.STEAM_API_KEY,
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

export default passport;
