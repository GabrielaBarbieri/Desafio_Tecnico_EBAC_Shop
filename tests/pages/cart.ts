import { Page } from "@playwright/test";
import { CartElements } from "../locators/cart.elements";

export class CartPage {
  readonly elements: CartElements;

  constructor(private page: Page) {
    this.elements = new CartElements(page);
  }

  async goToCart() {
    await this.elements.goToCartButton.click();
    await this.elements.viewCart.click();
  }

  async updateCartItemQuantity() {
    await this.elements.quantityInput.click();
  }
}
