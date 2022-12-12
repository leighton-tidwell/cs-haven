import { Link } from "react-router-dom";
import { Create } from "react-ionicons";
import { Package } from "../../routes/vip/plans";
import style from "./style.module.css";

type PlanCheckoutCardProps = {
  chosenPackage: Package;
};

const PlanCheckoutCard = ({ chosenPackage }: PlanCheckoutCardProps) => {
  return (
    <div
      className={`${style["checkout__plan"]} ${
        style[chosenPackage.background ?? "normal"]
      }`}
    >
      {chosenPackage.tag && (
        <div className={style["checkout__plan__tag"]}>Popular</div>
      )}
      <div className={style["checkout__plan__title"]}>
        {chosenPackage.title}
      </div>
      <div className={style["checkout__plan__price"]}>
        ${chosenPackage.price}
      </div>
      <div className={style["checkout__plan__edit"]}>
        <Link to="/vip/plans">
          <Create color="white" />
        </Link>
      </div>
    </div>
  );
};

export default PlanCheckoutCard;
