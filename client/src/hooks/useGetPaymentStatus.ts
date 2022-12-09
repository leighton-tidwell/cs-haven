import { useQuery } from "@tanstack/react-query";
import { Stripe } from "@stripe/stripe-js";

const retrievePaymentIntent = async (
  stripe?: Stripe | null,
  clientSecret?: string | null
) => {
  if (!stripe || !clientSecret) return false;

  const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

  if (!paymentIntent?.status) {
    throw new Error("An unknown error occurred.");
  }

  let status = "";
  switch (paymentIntent.status) {
    case "succeeded":
      status = "Payment succeeded!";
      break;
    case "processing":
      status = "Payment is processing.";
      break;
    case "requires_payment_method":
      status = "Payment failed, please try again.";
      break;
    default:
      status = "An unknown error occurred.";
      break;
  }

  return status;
};

export const useGetPaymentStatus = (
  stripe?: Stripe | null,
  clientSecret?: string | null
) =>
  useQuery({
    queryKey: ["payment-status", clientSecret],
    queryFn: async () => retrievePaymentIntent(stripe, clientSecret),
    enabled: !!clientSecret && !!stripe,
  });
