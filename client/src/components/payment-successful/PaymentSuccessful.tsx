import { LogoDiscord } from "react-ionicons";
import style from "./style.module.css";

const PaymentSuccessful = () => {
  const handleDiscordInvite = () => {
    window.open("https://discord.gg/5geAyUYeVN", "_blank");
  };

  return (
    <div className={style["payment-message"]}>
      <div className={style["payment-message__title"]}>Payment Successful!</div>
      <div className={style["payment-message__subtitle"]}>
        <span>
          Thank you for purchasing VIP with CS Haven. We hope you enjoy your
          experience.
        </span>
        <span>
          If your VIP does not automatically activate after the next map change,
          or you have any other questions, please join our Discord. Here you can
          speak with administrators, other players, and reccomend suggestions to
          the server developers.
        </span>
      </div>
      <div className={style["join-our-discord"]}>
        <div onClick={handleDiscordInvite} className={style["discord-button"]}>
          Join Our Discord
          <LogoDiscord color={"#ffffff"} />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
