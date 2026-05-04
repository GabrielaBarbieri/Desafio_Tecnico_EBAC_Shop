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
}

export async function navigateToProductPage(page: Page) {
  await page.locator(".breadcrumb li a").click();
}
