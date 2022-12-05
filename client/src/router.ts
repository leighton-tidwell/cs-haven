import { ArrowTemplate, reactive } from "@arrow-js/core";
import { homePage, vipPage } from "./pages";

export type Page = "HOME" | "VIP";
export type Routes = Record<Page, ArrowTemplate>;

window.addEventListener("popstate", () => {
  const hash = window.location.hash;
  const page = hash.slice(1) as Page;

  router.active = page;
});

class Router {
  private _active: Page;
  private _routes: Routes;

  constructor(active: Page) {
    this._active = active ?? "HOME";
    this._routes = {
      HOME: homePage,
      VIP: vipPage,
    };
  }

  get active() {
    return this._active;
  }

  set active(page: Page) {
    this._active = page;

    switch (page) {
      case "HOME":
        history.replaceState(null, "", " ");
        break;
      default:
        window.location.hash = this._active.toUpperCase();
    }
  }

  get routes() {
    return this._routes;
  }

  set routes(routes: Routes) {
    this._routes = routes;
  }

  getContent() {
    console.log(this._active);
    return this._routes[this._active];
  }
}

export const router = reactive(
  new Router(
    window.location.hash.slice(1) !== ""
      ? (window.location.hash.slice(1).split("?")[0] as Page)
      : "HOME"
  )
) as unknown as Router; // small hack to get intellisense for methods
