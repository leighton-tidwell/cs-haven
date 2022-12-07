import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import style from "./style.css";

type ContentLoaderProps = {
  mobileOnly?: boolean;
};

const ContentLoader = ({ mobileOnly = false }: ContentLoaderProps) => {
  const [isFadedIn, setIsFadedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadedIn(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${style["content-loader"]} ${
        isFadedIn ? style["show"] : style["hidden"]
      }
      ${mobileOnly ? style["mobile-only"] : null}}`}
    >
      <div className={style["content-loader__spinner"]} />
    </div>
  );
};

export default ContentLoader;
