import { Router } from "express";
import passport from "../configs/passport.config.js";
import authController from "../controllers/auth.controller.js";

const router = Router();

router.get("/verify", authController.verifyAuth);

router.get(
  "/steam",
  passport.authenticate("steam", { failureRedirect: "/404" }),
  authController.login
);

router.get(
  "/return",
  passport.authenticate("steam", { failureRedirect: "/404" }),
  authController.redirectToVIPPage
);

export default router;
