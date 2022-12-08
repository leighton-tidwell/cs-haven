import { LogoSteam } from "react-ionicons";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { ContentLoader } from "../";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cs-haven-logo.svg";
import style from "./style.module.css";

const Header = () => {
  const { data: userObject, isLoading } = useCheckAuth();

  if (isLoading) return <div>Loading...</div>; // TODO: loading states

  console.log(logo);

  return (
    <div className={style["header-container"]}>
      <div className={style.logo}>
        <Link to="/">
          <img src={logo} alt="CS Haven Logo" />
        </Link>
      </div>
      <div className={style.login}>
        {isLoading ? (
          <ContentLoader mobileOnly />
        ) : userObject?.id ? (
          <div className={style["logged-in"]}>
            <div className={style["logged-in__avatar"]}>
              <img src={userObject.avatar} alt={userObject.name} />
            </div>
            <div className={style["logged-in__username"]}>
              {userObject.name}
            </div>
          </div>
        ) : (
          <button
            className={style["sign-in-button"]}
            onClick={() => {
              if (typeof window !== undefined) {
                window.location.href = `${
                  import.meta.env.VITE_APP_API_ENDPOINT
                }/auth/steam`;
              }
            }}
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
