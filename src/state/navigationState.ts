import { reactive } from "@arrow-js/core";
import { Page } from "../router";

export const navigationState = reactive({
  active: "Home" as Page,
});
