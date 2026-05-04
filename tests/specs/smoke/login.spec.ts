import { test, expect } from "@playwright/test";
import { login } from "../../flows/login.flow";
import { User } from "../../fixtures/interfaces/login.model";

test("Realizar login na aplicação - Bem sucedido", async ({ page }) => {
  const user: User = {
    email: process.env.USER_EMAIL!,
    password: process.env.USER_PASSWORD!,
  };

  await login(page, user);
  await expect(page.locator("h1", { hasText: "Minha conta" })).toBeVisible();
});
