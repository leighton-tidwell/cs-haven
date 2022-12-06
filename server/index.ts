import express from "express";

import passport from "./src/configs/passport.config.js";
import { cors } from "./src/configs/cors.config.js";
import { env } from "./src/configs/env.config.js";
import { session } from "./src/configs/session.config.js";
import authRouter from "./src/routes/auth.route.js";

const app = express();
const port = env.PORT;

app.use(cors);
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (_req, res) => {
  res.json({ message: "ok" });
});

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`CS Haven API listening at ${env.API_ENDPOINT}:${port} 🚀 `);
});
