import { Page, Locator } from "@playwright/test";

export class CartElements {
  readonly page: Page;
  readonly goToCartButton: Locator;
  readonly viewCart: Locator;
  readonly cartPage: Locator;
  readonly quantityInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToCartButton = page.locator(
      "//a[@title='View your shopping cart']/span[@class='text-skin cart-icon']",
    );
    this.viewCart = page.locator("(//a[contains(text(), 'View Cart')])[2]");
    this.cartPage = page.locator("h1", { hasText: "Carrinho" });
    this.quantityInput = page.locator('input[value="+"]');
  }

}