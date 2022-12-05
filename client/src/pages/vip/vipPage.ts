import { html, reactive, watch } from "@arrow-js/core";
import axios from "axios";

const data = reactive({
  auth: false,
});

const checkAuth = async () =>
  axios
    .get("https://api.cs-haven.com/api/auth/verify", {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
      data.auth = response.data;
    })
    .catch((e) => {
      console.log(e);
    });

const output = () => {
  console.log(data, "change");
};

watch(output);

export const vipPage = html`<button
    type="button"
    @click="${async () => checkAuth()}"
  >
    Check Auth</button
  >${() =>
    data.auth ? `LOGGED IN WITH STEAM: ${data.auth}` : "NOT LOGGED IN"}`;
