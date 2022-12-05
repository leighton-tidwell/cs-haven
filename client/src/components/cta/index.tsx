import { h } from "preact";
import { route } from "preact-router";
import style from "./style.css";

const CallToAction = () => (
  <div class={style.cta}>
    <button
      type="button"
      onClick={() => route("/vip")}
      class={style["cta-button"]}
    >
      Become a VIP
    </button>
    <span class={style["cta-sub-text"]}>
      *Become a VIP today to bypass wait times, gain access to VIP commands and
      more!
    </span>
  </div>
);

export default CallToAction;
