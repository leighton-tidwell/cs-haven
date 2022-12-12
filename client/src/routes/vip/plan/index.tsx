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
import { useCheckAuth } from "../../../hooks/useCheckAuth";
import {
  ContentLoader,
  CheckoutForm,
  PlanCheckoutCard,
} from "../../../components";
import style from "./style.module.css";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Plan = () => {
  // get the parameters from react router
  const { planId } = useParams();
  const { data: user }: { data: any } = useCheckAuth();
  const { data: clientSecret, isLoading } = usePaymentIntent(planId, user.id);

  const chosenPackage = packages.find((p) => p.id === planId);

  const appearance: Appearance = {
    theme: "none",
    labels: "floating",
    variables: {
      fontFamily: "Roboto, sans-serif",
      borderRadius: "10px",
      colorLogo: "light",
      colorLogoBlock: "light",
      colorIcon: "#0071eb",
    },
    rules: {
      ".AccordionItem": {
        backgroundColor: "#17191c",
        borderColor: "#0a0d10",
      },
      ".AccordionItem--selected": {
        color: "white",
      },
      ".Label": {
        color: "white",
        fontWeight: "700",
      },
      ".Input": {
        backgroundColor: "#0a0d10",
        borderRadius: "5px",
      },
      ".Input:focus": {
        outline: "1px solid #0071eb",
      },
      ".Input:disabled": {
        backgroundColor: "#101419",
      },
      ".Block": {
        backgroundColor: "#0a0d10",
      },
      ".BlockDivider": {
        backgroundColor: "#17191c",
      },
      ".Dropdown": {
        backgroundColor: "#fff",
      },
    },
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
    fonts: [
      {
        cssSrc:
          "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      },
    ],
  };

  if (!chosenPackage) return <Navigate to="/404" />;

  if (!user) return <Navigate to="/vip" />;

  return isLoading ? (
    <ContentLoader />
  ) : (
    <div className={style["checkout"]}>
      <div className={style["chosen__plan__container"]}>
        <div className={style["checkout__title"]}>Checkout:</div>
        <PlanCheckoutCard chosenPackage={chosenPackage} />
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
