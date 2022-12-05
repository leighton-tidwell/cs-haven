import { h } from "preact";
import { route, Link } from "preact-router";
import style from "./style.css";

const Header = () => (
  <div class={style["header-container"]}>
    <div class={style.logo}>
      <Link href="/">
        <img src="/assets/images/cs-haven-logo.svg" alt="CS Haven Logo" />
      </Link>
    </div>
    <div class={style.login}>
      <button
        class={style["sign-in-button"]}
        onClick={() =>
          (window.location.href = "https://api.cs-haven.com/api/auth/steam")
        }
        type="button"
      >
        Sign in with Steam
      </button>
    </div>
  </div>
);

export default Header;
