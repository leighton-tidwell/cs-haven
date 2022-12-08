import { useTitle } from "../../hooks/useTitle";
import style from "./style.module.css";

import { Hero, Subhero, CallToAction } from "../../components";

const Home = () => {
  useTitle("");

  return (
    <div className={style["home-page-container"]}>
      <Hero />
      <Subhero />
      <CallToAction />
    </div>
  );
};

export default Home;
