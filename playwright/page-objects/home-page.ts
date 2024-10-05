import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class HomePage extends BasePage {
  readonly logOutButton: Locator;

  constructor(page: Page) {
    super(page);

    this.logOutButton = page.getByText("Log Out");
  }
}
