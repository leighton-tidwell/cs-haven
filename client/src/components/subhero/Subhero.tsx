import style from "./style.module.css";

const SubHero = () => (
  <div className={style["subhero-background"]}>
    <div className={style.subhero}>
      <span className={style["subhero-text"]}>
        CS Haven is a North American Counter Strike community that offers the
        best retake, death match and surf servers driven by community feedback.
      </span>
    </div>
  </div>
);

export default SubHero;
