import { useQuery } from "@tanstack/react-query";

const createPaymentIntent = async (id: any) => {
  const res = await fetch(
    `${import.meta.env.VITE_APP_API_ENDPOINT}/payment/create-payment-intent`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ id }],
      }),
    }
  );

  const data = await res.json();

  return data.clientSecret;
};

export const usePaymentIntent = (id: any) =>
  useQuery({
    queryKey: ["create-payment-intent", id],
    queryFn: async () => createPaymentIntent(id),
    enabled: !!id,
  });
