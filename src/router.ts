import { reactive } from "@arrow-js/core";
import { homePage, vipPage } from "./pages";

export type Page = "Home" | "VIP";

export const router = reactive({
  Home: homePage,
  VIP: vipPage,
});
