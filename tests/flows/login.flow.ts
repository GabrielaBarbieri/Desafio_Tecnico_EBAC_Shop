import { Page, expect, Locator } from "@playwright/test";
import { User } from "../fixtures/interfaces/login.model";

export class loginPageFlow {
  readonly page: Page;
  readonly validatePageLogin: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly validatePageAccount: Locator;
  readonly validateProductPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.validatePageLogin = page.locator("h2", { hasText: "Login" });
    this.emailInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('[name="login"]');
    this.validatePageAccount = page.locator("h1", { hasText: "Minha conta" });
    this.validateProductPage = page.locator(".breadcrumb li a");
  }

  async login(page: Page, user: User) {
    await page.goto("http://lojaebac.ebaconline.art.br/minha-conta/");
    await expect(page).toHaveTitle("Minha conta – EBAC – Shop");
    await expect(this.validatePageLogin).toBeVisible();
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
    await expect(this.validatePageAccount).toBeVisible();
  }

  async navigateToProductPage(page: Page) {
    await this.validateProductPage.click();
  }
}
