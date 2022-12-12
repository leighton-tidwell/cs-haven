import { CheckmarkDone } from "react-ionicons";
import { Benefit } from "../vip-benefits/VipBenefits";
import style from "./style.module.css";

type VipBenefitListItemProps = {
  benefit: Benefit;
};

const VipBenefitListItem = ({ benefit }: VipBenefitListItemProps) => {
  return (
    <div key={benefit.id} className={style["vip-benefits__benefits"]}>
      <div className={style["vip-benefits__benefit"]}>
        <div className={style["vip-benefits__benefit__icon"]}>
          <CheckmarkDone />
        </div>
        <div className={style["vip-benefits__benefit__information"]}>
          <div className={style["vip-benefits__benefit__title"]}>
            {benefit.title}
          </div>
          <div className={style["vip-benefits__benefit__description"]}>
            {benefit.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipBenefitListItem;
