import { h } from "preact";
import style from "./style.css";

const ContentLoader = () => {
  return (
    <div className={style["content-loader"]}>
      <div className={style["content-loader__spinner"]} />
    </div>
  );
};

export default ContentLoader;
