import { VipBenefitListItem } from "../";
import style from "./style.module.css";

export type Benefit = {
  id: number;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    id: 1,
    title: "No Wait Times",
    description:
      "When you become a VIP, you get to skip the spectator queue and join the game in the next round.",
  },
  {
    id: 2,
    title: "Special Commands",
    description:
      "To see a list of commands that VIPs have access to, take a look here.",
  },
  {
    id: 3,
    title: "And more",
    description:
      "We are constantly taking community feedback and adding/customizing plugins to the communities requests. VIPs will have access to any future features that are implemented.",
  },
];

const VipBenefits = () => {
  return (
    <div className={style["vip-benefits"]}>
      <div className={style["vip-benefits__title"]}>Joining VIP gets you:</div>
      {benefits.map((benefit) => (
        <VipBenefitListItem key={benefit.id} benefit={benefit} />
      ))}
    </div>
  );
};

export default VipBenefits;
