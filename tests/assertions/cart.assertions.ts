import { Page, expect } from "@playwright/test";
import { CartElements } from "../locators/cart.elements";

export class CartAssertions {
  readonly elements: CartElements;

  constructor(page: Page) {
    this.elements = new CartElements(page);
  }

  async cartPageIsVisible() {
    await expect(this.elements.cartPage).toBeVisible();
  }
}