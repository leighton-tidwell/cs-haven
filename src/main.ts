import { reactive, html } from "@arrow-js/core";
import { header } from "./components";
import "./style.css";

const app = document.getElementById("app");

const template = html`<div>${header}</div>`;

template(app);
