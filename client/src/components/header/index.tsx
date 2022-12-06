import { h } from "preact";
import { Link } from "preact-router";
import { LogoSteam } from "react-ionicons";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import style from "./style.css";

const Header = () => {
  const { data: isAuth, isLoading } = useCheckAuth();

  if (isLoading) return <div>Loading...</div>; // TODO: loading states

  return (
    <div class={style["header-container"]}>
      <div class={style.logo}>
        <Link href="/">
          <img src="/assets/images/cs-haven-logo.svg" alt="CS Haven Logo" />
        </Link>
      </div>
      <div class={style.login}>
        {isAuth ? (
          <div>signed in</div>
        ) : (
          <button
            class={style["sign-in-button"]}
            onClick={() =>
              (window.location.href = `${process.env.PREACT_APP_API_ENDPOINT}/auth/steam`)
            }
            type="button"
          >
            Sign in with Steam <LogoSteam color="white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
