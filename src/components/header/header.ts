import { html } from "@arrow-js/core";
import { steamButton } from "../steam-button/steam-button";
import "./header.css";

export const header = html`
  <div class="header-container">
    <div class="logo">
      <span>CS Haven</span>
    </div>
    <div class="nav">${steamButton}</div>
  </div>
`;
