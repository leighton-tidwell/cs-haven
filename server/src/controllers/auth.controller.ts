import { Request, Response } from "express";
import { env } from "../configs/env.config.js";

const verifyAuth = (req: Request, res: Response) => {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.send(req.user);
  } else {
    res.send({ success: false });
  }
};

const login = (req: Request, res: Response) => {
  res.send({ success: true });
};

const redirectToVIPPage = (req: Request, res: Response) => {
  res.redirect(`${env.CLIENT_ENDPOINT}vip?success=true`);
};

const authController = {
  verifyAuth,
  login,
  redirectToVIPPage,
};

export default authController;
