import { Stripe, StripeElements } from "@stripe/stripe-js";
import { useLazyQuery } from "./useLazyQuery";

const confirmPayment = async (
  stripe: Stripe | null,
  elements: StripeElements | null
) => {
  if (!stripe || !elements) return false;

  return stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: `${import.meta.env.VITE_APP_CLIENT_ENDPOINT}/vip/success`,
    },
    redirect: "if_required",
  });
};

export const useConfirmPayment = (
  stripe: Stripe | null,
  elements: StripeElements | null
) =>
  useLazyQuery(["confirm-payment"], async () =>
    confirmPayment(stripe, elements)
  );
