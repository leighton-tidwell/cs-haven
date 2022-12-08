import style from "./style.module.css";

const Hero = () => (
  <div className={style.hero}>
    <span className={`${style["hero-text"]} ${style.normal}`}>
      North Americas'
    </span>
    <span className={`${style["hero-text"]} ${style.bold}`}>
      Premiere Counter Strike
    </span>
    <span className={`${style["hero-text"]} ${style.normal}`}>Experience</span>
  </div>
);

export default Hero;
