import { html, reactive } from "@arrow-js/core";
import axios from "axios";

let authData = null;

const checkAuth = async () => {
  try {
    const { data } = await axios.get(
      "https://api.cs-haven.com/api/auth/verify",
      {
        withCredentials: true,
      }
    );
    console.log(data);
    authData = reactive(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const vipPage = html`<button type="button" @click="${checkAuth}">
    Check Auth</button
  >${authData ? html`<div>${JSON.stringify(authData)}</div>` : ""}`;
