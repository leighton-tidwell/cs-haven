import { useQuery } from "react-query";
import axios from "axios";

export const useCheckAuth = () => {
  const { isLoading, error, data } = useQuery("checkAuth", () =>
    axios
      .get(`${process.env.PREACT_APP_API_ENDPOINT}/auth/verify`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch((err) => {
        if (err.response.status === 404) {
          return null;
        }

        throw err;
      })
  );

  return { isLoading, error, data };
};
