import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, isAxiosError } from "axios";

// type UserObject = {
//   id: string;
//   steamid: string;
//   name: string;
//   profileurl: string;
//   avatar: string;
//   openid: string;
// };

// type FailedResponse = {
//   success: false;
// };

// type AuthResponse = UserObject | FailedResponse;
// Taking out typing until I understand this more.

const checkAuth = async () => {
  return;
};

export const useCheckAuth = () =>
  useQuery(["auth"], () =>
    axios
      .get(`${import.meta.env.VITE_APP_API_ENDPOINT}/auth/verify`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch((error: Error | AxiosError) => {
        if (isAxiosError(error)) {
          if (error.response?.status === 404) {
            return null;
          }
        } else {
          throw error;
        }
      })
  );
