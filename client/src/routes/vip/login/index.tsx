import { LogoSteam, HelpCircle } from "react-ionicons";
import style from "./style.module.css";

const Login = () => {
  return (
    <>
      <div className={style["steam-callout"]}>
        <div className={style["steam-callout__title"]}>
          To start, please login with steam
        </div>
        <button
          className={style["steam-callout__button"]}
          onClick={() => {
            window.location.href = `${
              import.meta.env.VITE_APP_API_ENDPOINT
            }/auth/steam`;
          }}
          type="button"
        >
          Sign in with Steam <LogoSteam color="white" />
        </button>
      </div>
      <div className={style["info-callout"]}>
        <div className={style["info-callout__icon"]}>
          <HelpCircle color="hsl(0, 0%, 18%)" />
        </div>
        <div className={style["info-callout__title"]}>
          We can&apos;t see your login details, that all takes place on Steams
          servers. You can read more about{" "}
          <a
            href="https://partner.steamgames.com/doc/features/auth"
            target="_blank"
            rel="noreferrer"
          >
            OpenID here.
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
