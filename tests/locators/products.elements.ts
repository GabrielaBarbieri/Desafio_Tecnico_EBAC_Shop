import { Page, Locator } from "@playwright/test";

export class ProductsPageElements {
  readonly page: Page;
  readonly productLink: Locator;
  readonly size: Locator;
  readonly color: Locator;
  readonly addToCartButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.productLink = page
      .locator(".product")
      .filter({
        hasText: "Ingrid Running Jacket",
      })
      .first();
    this.size = page.getByRole("radio", { name: "XL" });
    this.color = page.getByRole("radio", { name: "Orange" });
    this.addToCartButton = page.locator("button", { hasText: "Comprar" });
  }
}