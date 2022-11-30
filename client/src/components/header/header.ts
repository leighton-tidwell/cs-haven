import { html } from "@arrow-js/core";
import { router } from "../../router";
import "./header.css";

export const header = html`
  <div class="header-container">
    <div class="logo">
      <a @click="${() => (router.active = "HOME")}">
        <img src="/images/cs-haven-logo.svg" alt="CS Haven Logo" />
      </a>
    </div>
    <div class="login">
      <button
        @click="${() => (router.active = "HOME")}"
        class="sign-in-button"
        type="button"
      >
        Sign in with Steam
        <ion-icon
          name="logo-steam"
          class="fa
        fa-steam-square"
          size="large"
        />
      </button>
    </div>
  </div>
`;
