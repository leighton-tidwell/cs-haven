import { navigationState } from "../state";
import { Page } from "../router";

export const navigateToPage = (page: Page) => {
  navigationState.active = page;
};
