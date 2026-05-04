import { test, expect } from "@playwright/test";
import { loginPageFlow } from "../../flows/login.flow";
import { User } from "../../fixtures/interfaces/login.model";

test("@smoke: Realizar login na aplicação - Bem sucedido", async ({ page }) => {
  const user: User = {
    email: process.env.USER_EMAIL!,
    password: process.env.USER_PASSWORD!,
  };

  const loginFlow = new loginPageFlow(page);
  await loginFlow.login(page, user);
  await expect(loginFlow.validatePageAccount).toBeVisible();
});
