import { useNavigate } from "react-router-dom";
import { Package } from "../../routes/vip/plans";
import style from "./style.module.css";

const PlanCard = ({ packageItem }: { packageItem: Package }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${style["choose-package__package"]} ${
        style[packageItem.background ?? "normal"]
      }`}
      onClick={() => navigate(`/vip/plans/${packageItem.id}`)}
    >
      {packageItem.tag && (
        <div className={style["choose-package__package__tag"]}>
          {packageItem.tag}
        </div>
      )}
      <div className={style["choose-package__package__title"]}>
        {packageItem.title}
      </div>
      <div className={style["choose-package__package__description"]}>
        {packageItem.description}
      </div>
      {packageItem.subtext && (
        <div className={style["choose-package__package__subtext"]}>
          {packageItem.subtext}
        </div>
      )}
      <div className={style["choose-package__package__price"]}>
        {packageItem.crossOutPrice && (
          <div className={style["choose-package__package__cross-out-price"]}>
            ${packageItem.crossOutPrice}
          </div>
        )}
        <div className={style["choose-package__package__actual-price"]}>
          ${packageItem.price}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
