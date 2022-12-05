import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import axios from "axios";
import style from "./style.css";

const Vip = () => {
  const [data, setData] = useState(null);

  const checkAuth = async () =>
    axios
      .get("https://api.cs-haven.com/api/auth/verify", {
        withCredentials: true,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className={style["home-page-container"]}>
      {data ? (
        <div>You are authenticated with {JSON.stringify(data)}</div>
      ) : (
        <div>You are not authenticated</div>
      )}
    </div>
  );
};

export default Vip;
