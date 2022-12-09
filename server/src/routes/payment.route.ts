import { Router } from "express";
import passport from "../configs/passport.config.js";
import paymentController from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-payment-intent", paymentController.createPaymentIntent);

export default router;
