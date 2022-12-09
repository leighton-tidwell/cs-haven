import { FormEvent, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import style from "./style.module.css";
import { useGetPaymentStatus } from "../../hooks/useGetPaymentStatus";
import { useGetWindowClientSecret } from "../../hooks/useGetWindowClientSecret";
import { useConfirmPayment } from "../../hooks/useConfirmPayment";
import { LogoDiscord } from "react-ionicons";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const clientSecret = useGetWindowClientSecret();
  const { data: paymentStatus } = useGetPaymentStatus(stripe, clientSecret);
  const [submitPayment, query] = useConfirmPayment(stripe, elements);
  const { data } = query as any;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    submitPayment();
  };

  const handleDiscordInvite = () => {
    window.open("https://discord.gg/5geAyUYeVN", "_blank");
  };

  if (data?.paymentIntent) {
    return (
      <div className={style["payment-message"]}>
        <div className={style["payment-message__title"]}>
          Payment Successful!
        </div>
        <div className={style["payment-message__subtitle"]}>
          <span>
            Thank you for purchasing VIP with CS Haven. We hope you enjoy your
            experience.
          </span>
          <span>
            If your VIP does not automatically activate after the next map
            change, or you have any other questions, please join our Discord.
            Here you can speak with administrators, other players, and reccomend
            suggestions to the server developers.
          </span>
        </div>
        <div className={style["join-our-discord"]}>
          <div
            onClick={handleDiscordInvite}
            className={style["discord-button"]}
          >
            Join Our Discord
            <LogoDiscord color={"#ffffff"} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <form className={style["payment-form"]} onSubmit={handleSubmit}>
        <PaymentElement
          id="payment-element"
          options={{ layout: "accordion" }}
        />
        {paymentStatus && (
          <div className={style["payment-message"]}>{paymentStatus}</div>
        )}
      </form>
      <button
        disabled={query.isFetching || !stripe || !elements}
        className={style["payment-button"]}
        type="submit"
        id="submit"
        onClick={handleSubmit}
      >
        <span className={style["checkout-text"]}>
          {query.isFetching ? (
            <div className={style["button-spinner"]} />
          ) : (
            "Submit Payment"
          )}
        </span>
      </button>
    </>
  );
};

export default CheckoutForm;
