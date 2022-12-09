import { Request, Response } from "express";
import { stripe } from "../configs/stripe.config.js";

const calculateOrderAmount = (items: any) => {
  return 1400;
};

const createPaymentIntent = async (req: Request, res: Response) => {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1400,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

const paymentController = {
  createPaymentIntent,
};

export default paymentController;
