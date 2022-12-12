import { FormEvent } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useGetPaymentStatus } from "../../hooks/useGetPaymentStatus";
import { useGetWindowClientSecret } from "../../hooks/useGetWindowClientSecret";
import { useConfirmPayment } from "../../hooks/useConfirmPayment";
import { PaymentSuccessful } from "../";
import style from "./style.module.css";

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

  if (data?.paymentIntent) return <PaymentSuccessful />;

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
