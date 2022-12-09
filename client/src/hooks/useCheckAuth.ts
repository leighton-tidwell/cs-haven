import { useQuery } from "@tanstack/react-query";

const checkAuth = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_APP_API_ENDPOINT}/auth/verify`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.json();
};

export const useCheckAuth = () =>
  useQuery({
    queryKey: ["auth"],
    queryFn: checkAuth,
  });
