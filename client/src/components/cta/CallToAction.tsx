import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className={style.cta}>
      <button
        type="button"
        onClick={() => navigate("/vip")}
        className={style["cta-button"]}
      >
        Become a VIP
      </button>
      <span className={style["cta-sub-text"]}>
        *Become a VIP today to bypass wait times, gain access to VIP commands
        and more!
      </span>
    </div>
  );
};
export default CallToAction;
