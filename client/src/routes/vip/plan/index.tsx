import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { packages } from "../plans";
import { Create } from "react-ionicons";
import {
  loadStripe,
  StripeElementsOptions,
  Appearance,
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { usePaymentIntent } from "../../../hooks/usePaymentIntent";
import style from "./style.module.css";
import { useCheckAuth } from "../../../hooks/useCheckAuth";
import { ContentLoader, CheckoutForm } from "../../../components";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Plan = () => {
  // get the parameters from react router
  const { planId } = useParams();
  const { data: user } = useCheckAuth();
  const { data: clientSecret, isLoading } = usePaymentIntent(planId);

  const chosenPackage = packages.find((p) => p.id === planId);

  const appearance: Appearance = {
    theme: "stripe",
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  if (!chosenPackage) return <Navigate to="/404" />;

  if (!user) return <Navigate to="/vip" />;

  return isLoading ? (
    <ContentLoader />
  ) : (
    <div className={style["checkout"]}>
      <div className={style["chosen__plan__container"]}>
        <div className={style["checkout__title"]}>Checkout:</div>
        <div
          className={`${style["checkout__plan"]} ${
            style[chosenPackage.background ?? "normal"]
          }`}
        >
          {chosenPackage.tag && (
            <div className={style["checkout__plan__tag"]}>Popular</div>
          )}
          <div className={style["checkout__plan__title"]}>
            {chosenPackage.title}
          </div>
          <div className={style["checkout__plan__price"]}>
            ${chosenPackage.price}
          </div>
          <div className={style["checkout__plan__edit"]}>
            <Link to="/vip/plans">
              <Create color="white" />
            </Link>
          </div>
        </div>
        <div className={style["checkout__description"]}>
          {chosenPackage.description}
        </div>
      </div>
      <div className={style["checkout__divider"]} />
      <div className={style["total__price"]}>
        <span>Total:</span>${chosenPackage.price}
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Plan;
