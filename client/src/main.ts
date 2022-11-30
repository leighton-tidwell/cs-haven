import { html, ParentNode } from "@arrow-js/core";
import { router } from "./router";
import { header } from "./components";
import "./style.css";

const app = document.getElementById("app") as ParentNode;

const template = html`${header}${() => router.getContent()}`;

template(app);
