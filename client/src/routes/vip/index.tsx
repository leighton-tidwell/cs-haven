import { h } from "preact";
import { useTitle } from "../../hooks/useTitle";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import style from "./style.css";

import ContentLoader from "../../components/content-loader";

const Vip = () => {
  useTitle("VIP");
  const { data, isLoading } = useCheckAuth();

  if (isLoading) return <ContentLoader />;

  if (!data)
    return (
      <div className={style["home-page-container"]}>
        <div>You are not authenticated</div>
      </div>
    );

  return (
    <div className={style["home-page-container"]}>
      <div>You are authenticated with {JSON.stringify(data)}</div>
    </div>
  );
};

export default Vip;
