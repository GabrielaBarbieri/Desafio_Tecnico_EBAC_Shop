import { Page, expect } from "@playwright/test";
import { CheckoutPageElements } from "../locators/checkout.elements";

export class CheckoutAssertions {
  readonly elements: CheckoutPageElements;

  constructor(page: Page) {
    this.elements = new CheckoutPageElements(page);
  }

   async validateCheckoutPage() {
    await expect(this.elements.checkoutPage).toBeVisible();
  }

  async validateOrderReceived() {
    await expect(this.elements.orderReceivedMessage).toBeVisible();
  }
}