import { test, expect } from "../helpers/fixtures";
import { newUser } from "../helpers/test.data";

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto(
    "https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC"
  );
});

test.describe("Login", () => {
  test("should login new user with valid credentials", async ({
    loginPage,
    registerPage,
    homePage,
  }) => {
    await test.step("When the user wants to register", async () => {
      await loginPage.registerButton.click();
      await registerPage.waitForAnimation();
    });
    await test.step("And fills out all the required fields", async () => {
      await registerPage.firstNameInput.fill(newUser.firstName);
      await registerPage.lastNameInput.fill(newUser.lastName);
      await registerPage.addressInput.fill(newUser.address);
      await registerPage.cityNameInput.fill(newUser.cityName);
      await registerPage.stateNameInput.fill(newUser.stateName);
      await registerPage.zipCodeInput.fill(newUser.zipCode);
      await registerPage.phoneNumberInput.fill(newUser.phoneNumber);
      await registerPage.socialSecurityNumberInput.fill(
        newUser.socialSecurityNumber
      );
      await registerPage.userNameInput.fill(newUser.userName);
      await registerPage.passwordInput.fill(newUser.password);
      await registerPage.confirmPasswordInput.fill(newUser.confirmPassword);

      await registerPage.registerButton.click();
      await expect(registerPage.body).toContainText(
        "Welcome " + newUser.userName
      );
      await homePage.logOutButton.click();
    });
    await test.step("Then the registered user should be able to login with valid credentials", async () => {
      await loginPage.userInput.fill(newUser.userName);
      await loginPage.passwordInput.fill(newUser.password);
      await loginPage.loginButton.click();
      await expect(homePage.body).toContainText("Accounts Overview");
    });
  });
});
