import { useEffect, useState } from "react";

export const useGetWindowClientSecret = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    setClientSecret(clientSecret);
  }, []);

  return clientSecret;
};
