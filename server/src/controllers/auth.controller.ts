import { Request, Response } from "express";
import { env } from "../configs/env.config.js";

const verifyAuth = (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    res.send(req.user);
  } else {
    res.send({ success: false });
  }
};

const login = (_req: Request, res: Response) => {
  res.send({ success: true });
};

const redirectToVIPPage = (_req: Request, res: Response) => {
  res.redirect(`${env.CLIENT_ENDPOINT}vip`);
};

const authController = {
  verifyAuth,
  login,
  redirectToVIPPage,
};

export default authController;
