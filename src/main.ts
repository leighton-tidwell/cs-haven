import { reactive, html } from "@arrow-js/core";
import { header, hero } from "./components";
import "./style.css";

const app = document.getElementById("app");

const template = html` <div>${header}${hero}</div>`;

template(app);
