import { useQuery } from "@tanstack/react-query";

const createPaymentIntent = async (id: any, steamid: string) => {
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
        steamid,
      }),
    }
  );

  const data = await res.json();

  return data.clientSecret;
};

export const usePaymentIntent = (id: any, steamid: string) =>
  useQuery({
    queryKey: ["create-payment-intent", id],
    queryFn: async () => createPaymentIntent(id, steamid),
    enabled: !!id || !!steamid,
    staleTime: Infinity,
  });
