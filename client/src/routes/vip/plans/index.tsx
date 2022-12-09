import { useCheckAuth } from "../../../hooks/useCheckAuth";
import { HelpCircle } from "react-ionicons";
import style from "./style.module.css";
import { ContentLoader } from "../../../components";
import { Navigate, useNavigate } from "react-router-dom";

export const packages = [
  {
    id: "one-month",
    title: "One Month",
    description: "Purchases one month of VIP access to all CS Haven servers.",
    subtext: "DOES NOT RENEW",
    price: 6.99,
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
  },
  {
    id: "three-months",
    title: "Three Months",
    description:
      "Purchases three months of VIP access to all CS Haven servers.",
    subtext: "DOES NOT RENEW",
    price: 17.99,
  },
  {
    id: "quarterly",
    title: "Quarterly",
    description:
      "Auto renews quarterly, you can cancel ANY time with no penalty.",
    price: 15.99,
    background: "quaternary",
  },
];

const Plans = () => {
  const { data: user, isLoading } = useCheckAuth();
  const navigate = useNavigate();

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
            <div
              key={packageItem.id}
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
                  <div
                    className={
                      style["choose-package__package__cross-out-price"]
                    }
                  >
                    ${packageItem.crossOutPrice}
                  </div>
                )}
                <div className={style["choose-package__package__actual-price"]}>
                  ${packageItem.price}
                </div>
              </div>
            </div>
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
