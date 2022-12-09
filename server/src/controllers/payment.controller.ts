import { Request, Response } from "express";
import { ParsedUserObject } from "../configs/passport.config.js";
import { stripe } from "../configs/stripe.config.js";

const calculateOrderAmount = (items: any) => {
  let price = 0;
  switch (items[0].id) {
    case "one-month":
      price = 699;
      break;
    case "monthly":
      price = 599;
      break;
    case "three-months":
      price = 1799;
      break;
    case "quarterly":
      price = 1599;
      break;
  }

  return price;
};

const createPaymentIntent = async (req: Request, res: Response) => {
  if (!req.isAuthenticated())
    return res.status(401).send({ error: "Unauthorized" });

  const { items, steamid } = req.body;
  const user = req.user as ParsedUserObject; // access to the user object

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    // customer: user.id, commenting out for now
    metadata: {
      steamid,
      item: items[0].id,
    },
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
