import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { baseURL, newUser } from "../helpers/test.data";

export class RegisterPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly cityNameInput: Locator;
  readonly stateNameInput: Locator;
  readonly zipCodeInput: Locator;
  readonly phoneNumberInput: Locator;
  readonly socialSecurityNumberInput: Locator;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    super(page);

    this.firstNameInput = page.locator('input[name="customer.firstName"]');
    this.lastNameInput = page.locator('input[name="customer.lastName"]');
    this.addressInput = page.locator('input[name="customer.address.street"]');
    this.cityNameInput = page.locator('input[name="customer.address.city"]');
    this.stateNameInput = page.locator('input[name="customer.address.state"]');
    this.zipCodeInput = page.locator('input[name="customer.address.zipCode"]');
    this.phoneNumberInput = page.locator('input[name="customer.phoneNumber"]');
    this.socialSecurityNumberInput = page.locator('input[name="customer.ssn"]');
    this.userNameInput = page.locator('input[name="customer.username"]');
    this.passwordInput = page.locator('input[name="customer.password"]');
    this.confirmPasswordInput = page.locator('input[name="repeatedPassword"]');
    this.registerButton = page.getByRole("button", { name: "Register" });
  }

  async registerNewUserAccount() {
    await this.goto(`${baseURL}/register.htm`);
    await this.firstNameInput.fill(newUser.firstName);
    await this.lastNameInput.fill(newUser.lastName);
    await this.addressInput.fill(newUser.address);
    await this.cityNameInput.fill(newUser.cityName);
    await this.stateNameInput.fill(newUser.stateName);
    await this.zipCodeInput.fill(newUser.zipCode);
    await this.phoneNumberInput.fill(newUser.phoneNumber);
    await this.socialSecurityNumberInput.fill(newUser.socialSecurityNumber);
    await this.userNameInput.fill(newUser.userName);
    await this.passwordInput.fill(newUser.password);
    await this.confirmPasswordInput.fill(newUser.confirmPassword);

    await this.registerButton.click();
  }
}
