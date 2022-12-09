import style from "./style.module.css";

type ContentLoaderProps = {
  mobileOnly?: boolean;
};

const ContentLoader = ({ mobileOnly = false }: ContentLoaderProps) => (
  <div
    className={`${style["content-loader"]}
      ${mobileOnly ? style["mobile-only"] : null}}`}
  >
    <div className={style["content-loader__spinner"]} />
  </div>
);

export default ContentLoader;
