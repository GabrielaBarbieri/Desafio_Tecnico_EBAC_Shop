import { Page, expect } from "@playwright/test";
import { User } from "../fixtures/interfaces/login.model";

export async function login(page: Page, user: User) {
  await page.goto("http://lojaebac.ebaconline.art.br/minha-conta/");

  await expect(page).toHaveTitle("Minha conta – EBAC – Shop");

  await expect(page.locator("h2", { hasText: "Login" })).toBeVisible();

  await page.locator("#username").fill(user.email);
  await page.locator("#password").fill(user.password);

  await page.locator('[name="login"]').click();

  await expect(page.locator("h1", { hasText: "Minha conta" })).toBeVisible();

  // Navegar para a página de produtos
  await page
    .locator(
      "//li[contains(., 'Minha conta')]/preceding-sibling::li/a[contains(text(), 'Home')]",
    )
    .click();
}
