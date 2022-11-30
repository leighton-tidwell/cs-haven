import { html } from "@arrow-js/core";
import { router } from "../../router";
import "./cta.css";

export const cta = html`<div class="cta">
<button @click="${() =>
  (router.active = "VIP")}" type="button" class="cta-button">
Become a VIP
</button>
<span class="cta-sub-text">
*Become a VIP today to bypass wait times, gain access to VIP commands and more!</div>`;
