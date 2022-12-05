import { h } from "preact";
import style from "./style.css";

const Hero = () => (
  <div class={style.hero}>
    <span class={`${style["hero-text"]} ${style.normal}`}>North Americas'</span>
    <span class={`${style["hero-text"]} ${style.bold}`}>
      Premiere Counter Strike
    </span>
    <span class={`${style["hero-text"]} ${style.normal}`}>Experience</span>
  </div>
);

export default Hero;
