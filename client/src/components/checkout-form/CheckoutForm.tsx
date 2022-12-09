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

const CheckoutForm = ({ user }: { user: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const clientSecret = useGetWindowClientSecret();
  const { data: paymentStatus } = useGetPaymentStatus(stripe, clientSecret);
  const [submitPayment, query] = useConfirmPayment(stripe, elements);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    submitPayment();
  };

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
            <div className="spinner" id="spinner">
              loading...
            </div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
    </>
  );
};

export default CheckoutForm;
