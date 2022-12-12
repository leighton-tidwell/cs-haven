import { useCheckAuth } from "../../../hooks/useCheckAuth";
import { HelpCircle } from "react-ionicons";
import style from "./style.module.css";
import { ContentLoader, PlanCard } from "../../../components";
import { Navigate, useNavigate } from "react-router-dom";

export type Package = {
  id: string;
  title: string;
  description: string;
  subtext?: string;
  price: number;
  subscription: boolean;
  tag?: string;
  crossOutPrice?: number;
  background?: string;
};

export const packages: Package[] = [
  {
    id: "one-month",
    title: "One Month",
    description: "Purchases one month of VIP access to all CS Haven servers.",
    subtext: "DOES NOT RENEW",
    price: 6.99,
    subscription: false,
  },
  {
    id: "monthly",
    tag: "Popular",
    title: "Monthly",
    description:
      "Auto renews monthly, you can cancel ANY time with no penalty.",
    crossOutPrice: 6.99,
    price: 5.99,
    background: "primary",
    subscription: true,
  },
  {
    id: "three-months",
    title: "Three Months",
    description:
      "Purchases three months of VIP access to all CS Haven servers.",
    subtext: "DOES NOT RENEW",
    price: 17.99,
    subscription: false,
  },
  {
    id: "quarterly",
    title: "Quarterly",
    description:
      "Auto renews quarterly, you can cancel ANY time with no penalty.",
    price: 15.99,
    background: "quaternary",
    subscription: true,
  },
];

const Plans = () => {
  const { data: user, isLoading } = useCheckAuth();

  if (isLoading) return <ContentLoader />;

  if (!user) return <Navigate to="/vip" />;

  return (
    <div className={style["logged-in"]}>
      <div className={style["logged-in__welcome"]}>
        Welcome, <span className={style["bold"]}>{user.name}</span>
      </div>
      <div className={style["choose-package"]}>
        <div className={style["choose-package__title"]}>Choose a package:</div>
        <div className={style["choose-package__packages"]}>
          {packages.map((packageItem) => (
            <PlanCard key={packageItem.id} packageItem={packageItem} />
          ))}
        </div>
      </div>
      <div className={style["no-refund-callout"]}>
        <div className={style["no-refund-callout__icon"]}>
          <HelpCircle color="hsl(0, 0%, 18%)" />
        </div>
        <div className={style["no-refund-callout__text"]}>
          All of our offerings are non refundable.
        </div>
      </div>
    </div>
  );
};
export default Plans;
