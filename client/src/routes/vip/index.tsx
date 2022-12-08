import { h, Fragment } from "preact";
import { CheckmarkDone, LogoSteam, HelpCircle } from "react-ionicons";
import { useTitle } from "../../hooks/useTitle";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import style from "./style.css";

import ContentLoader from "../../components/content-loader";

const benefits = [
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

const packages = [
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

const Vip = () => {
  useTitle("VIP");
  const { data, isLoading } = useCheckAuth();

  return (
    <div class={style["vip-page-container"]}>
      <div
        class={`${style["top-pane"]} ${
          isLoading || data?.id ? style["hidden"] : ""
        }`}
      >
        <Fragment>
          <div class={style["intro-statement"]}>
            <div class={style["intro-statement__title"]}>
              <img src="/assets/images/cs-haven-logo.svg" alt="CS Haven Logo" />
              <span>VIP</span>
            </div>
            <div class={style["intro-statement__subtitle"]}>
              CS Haven is the premiere North American Counter Strike community.
              We offer premium retakes, deathmatch and surf servers that are
              created with recommendations from the community.
            </div>
          </div>
          <div class={style["vip-benefits"]}>
            <div class={style["vip-benefits__title"]}>
              Joining VIP gets you:
            </div>
            {benefits.map((benefit) => (
              <div key={benefit.id} class={style["vip-benefits__benefits"]}>
                <div class={style["vip-benefits__benefit"]}>
                  <div class={style["vip-benefits__benefit__icon"]}>
                    <CheckmarkDone />
                  </div>
                  <div class={style["vip-benefits__benefit__information"]}>
                    <div class={style["vip-benefits__benefit__title"]}>
                      {benefit.title}
                    </div>
                    <div class={style["vip-benefits__benefit__description"]}>
                      {benefit.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      </div>
      <div
        class={`${style["bottom-pane"]} ${
          isLoading || !data?.id ? style["flex-center"] : ""
        }`}
      >
        {isLoading ? (
          <ContentLoader />
        ) : data?.id ? (
          <div class={style["logged-in"]}>
            <div class={style["logged-in__welcome"]}>
              Welcome, <span class={style["bold"]}>{data.name}</span>
            </div>
            <div class={style["choose-package"]}>
              <div class={style["choose-package__title"]}>
                Choose a package:
              </div>
              <div class={style["choose-package__packages"]}>
                {packages.map((packageItem) => (
                  <div
                    key={packageItem.id}
                    class={`${style["choose-package__package"]} ${
                      style[packageItem.background ?? "normal"]
                    }`}
                  >
                    {packageItem.tag && (
                      <div class={style["choose-package__package__tag"]}>
                        {packageItem.tag}
                      </div>
                    )}
                    <div class={style["choose-package__package__title"]}>
                      {packageItem.title}
                    </div>
                    <div class={style["choose-package__package__description"]}>
                      {packageItem.description}
                    </div>
                    {packageItem.subtext && (
                      <div class={style["choose-package__package__subtext"]}>
                        {packageItem.subtext}
                      </div>
                    )}
                    <div class={style["choose-package__package__price"]}>
                      {packageItem.crossOutPrice && (
                        <div
                          class={
                            style["choose-package__package__cross-out-price"]
                          }
                        >
                          ${packageItem.crossOutPrice}
                        </div>
                      )}
                      <div
                        class={style["choose-package__package__actual-price"]}
                      >
                        ${packageItem.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class={style["no-refund-callout"]}>
              <div class={style["no-refund-callout__icon"]}>
                <HelpCircle color="hsl(0, 0%, 18%)" />
              </div>
              <div class={style["no-refund-callout__text"]}>
                All of our offerings are non refundable.
              </div>
            </div>
          </div>
        ) : (
          <Fragment>
            <div class={style["steam-callout"]}>
              <div class={style["steam-callout__title"]}>
                To start, please login with steam
              </div>
              <button
                class={style["steam-callout__button"]}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.href = `${process.env.PREACT_APP_API_ENDPOINT}/auth/steam`;
                  }
                }}
                type="button"
              >
                Sign in with Steam <LogoSteam color="white" />
              </button>
            </div>
            <div class={style["info-callout"]}>
              <div class={style["info-callout__icon"]}>
                <HelpCircle color="hsl(0, 0%, 18%)" />
              </div>
              <div class={style["info-callout__title"]}>
                We can&apos;t see your login details, that all takes place on
                Steams servers. You can read more about{" "}
                <a
                  href="https://partner.steamgames.com/doc/features/auth"
                  target="_blank"
                  rel="noreferrer"
                >
                  OpenID here.
                </a>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Vip;
