import { html } from "@arrow-js/core";
import { cta, hero, subhero } from "../../components";
import "./homepage.css";

export const homePage = html`<div class="home-page-container">
  ${hero}${subhero}${cta}
</div>`;
