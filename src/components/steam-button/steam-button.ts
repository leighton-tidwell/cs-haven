import { html } from "@arrow-js/core";
import "./steam-button.css";

export const steamButton = html`
  <a href="#" class="steambutton">
    <span>Login With Steam</span>
    <div class="icon">
      <ion-icon name="logo-steam" class="fa fa-steam-square"></ion-icon>
    </div>
  </a>
`;
