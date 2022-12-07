import passport from "passport";
import { Strategy } from "passport-steam";
import SteamID from "steamid";

import { env } from "./env.config.js";
import { User } from "../models/user.model.js";

type SteamUserObject = {
  provider: string;
  _json: {
    steamid: string;
    communityvisibilitystate: number;
    profilestate: number;
    personaname: string;
    commentpermission: number;
    profileurl: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    avatarhash: string;
    lastlogoff: number;
    personastate: number;
    primaryclanid: string;
    timecreated: number;
    personastateflags: number;
  };
  id: string;
  displayName: string;
  photos: Record<string, any>[];
  identifier: string;
};

type ParsedUserObject = {
  id: string;
  steamid: string;
  name: string;
  profileurl: string;
  avatar: string;
  openid: string;
};

passport.serializeUser((user: ParsedUserObject, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) =>
  User.findByPk(id).then((user) => {
    done(null, user);
  })
);

passport.use(
  new Strategy(
    {
      returnURL: `${env.API_ENDPOINT}auth/return`,
      realm: env.API_ENDPOINT,
      apiKey: env.STEAM_API_KEY,
    },
    async (
      identifier: string,
      profile: SteamUserObject,
      done: (arg0: any, arg1: object) => void
    ) =>
      User.upsert({
        id: profile.id,
        steamid: new SteamID(profile._json.steamid).getSteam2RenderedID(true),
        name: profile.displayName,
        profileurl: profile._json.profileurl,
        avatar: profile._json.avatar,
        openid: identifier,
      })
        .then(([instance, _created]) => done(null, instance))
        .catch((e) => console.log(e))
  )
);

export default passport;
