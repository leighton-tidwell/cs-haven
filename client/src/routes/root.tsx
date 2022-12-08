import { Outlet } from "react-router-dom";
import { Header } from "../components";

const Root = () => (
  <div id="app">
    <Header />
    <Outlet />
  </div>
);

export default Root;
