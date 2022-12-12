import { CheckmarkDone } from "react-ionicons";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { ContentLoader, VipBenefits } from "../../components";
import logo from "../../assets/images/cs-haven-logo.svg";
import style from "./style.module.css";

import Login from "./login";

const Vip = () => {
  const { data, isLoading } = useCheckAuth();
  let location = useLocation();

  return (
    <div className={style["vip-page-container"]}>
      <div
        className={`${style["top-pane"]} ${
          isLoading || data?.id ? style["hidden"] : ""
        }`}
      >
        <>
          <div className={style["intro-statement"]}>
            <div className={style["intro-statement__title"]}>
              <img src={logo} alt="CS Haven Logo" />
              <span>VIP</span>
            </div>
            <div className={style["intro-statement__subtitle"]}>
              CS Haven is the premiere North American Counter Strike community.
              We offer premium retakes, deathmatch and surf servers that are
              created with recommendations from the community.
            </div>
          </div>
          <VipBenefits />
        </>
      </div>
      <div
        className={`${style["bottom-pane"]} ${
          isLoading || !data?.id ? style["flex-center"] : ""
        }`}
      >
        {/* We will show the loader if loading
         We will show the login page if the user is not logged in
         Navigate the user to the plans page if they are logged in
         * this will need to be expanded on to allow for expired VIPS
      if none of those, we must be on a sub route.. show the content */}
        {isLoading ? (
          <ContentLoader />
        ) : !data?.id ? (
          <Login />
        ) : !location.pathname.includes("/vip/plans") ? (
          <Navigate to="/vip/plans" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Vip;
