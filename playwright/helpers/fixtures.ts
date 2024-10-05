import { test as base } from "@playwright/test";
import { LoginPage } from "../page-objects/login-page";
import { BasePage } from "../page-objects/base-page";
import { RegisterPage } from "../page-objects/register-page";
import { HomePage } from "../page-objects/home-page";

type MyFixtures = {
  loginPage: LoginPage;
  basePage: BasePage;
  registerPage: RegisterPage;
  homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },

  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

export { expect } from "@playwright/test";
