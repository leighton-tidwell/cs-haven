import { h } from "preact";
import style from "./style.css";

import Hero from "../../components/hero";
import SubHero from "../../components/subhero";
import CallToAction from "../../components/cta";

const Home = () => (
  <div className={style["home-page-container"]}>
    <Hero />
    <SubHero />
    <CallToAction />
  </div>
);

export default Home;
