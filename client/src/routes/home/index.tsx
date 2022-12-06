import { h } from "preact";
import { useTitle } from "../../hooks/useTitle";
import style from "./style.css";

import Hero from "../../components/hero";
import SubHero from "../../components/subhero";
import CallToAction from "../../components/cta";

const Home = () => {
  useTitle("");

  return (
    <div className={style["home-page-container"]}>
      <Hero />
      <SubHero />
      <CallToAction />
    </div>
  );
};

export default Home;
