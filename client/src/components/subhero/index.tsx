import { h } from "preact";
import style from "./style.css";

const SubHero = () => (
  <div class={style["subhero-background"]}>
    <div class={style.subhero}>
      <span class={style["subhero-text"]}>
        CS Haven is a North American Counter Strike community that offers the
        best retake, death match and surf servers driven by community feedback.
      </span>
    </div>
  </div>
);

export default SubHero;
