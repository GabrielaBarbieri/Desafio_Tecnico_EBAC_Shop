import { Page, expect } from "@playwright/test";
import { Order } from "../fixtures/interfaces/order.model";
import { CheckoutPageElements } from "../locators/checkout.elements";

export class CheckoutPage {
  readonly elements: CheckoutPageElements;

  constructor(private page: Page) {
    this.elements = new CheckoutPageElements(page);
  }

  async goCheckout() {
    await this.elements.proceedToCheckoutButton.click();
  }

  async fillCheckoutForm(order: Order) {
    await this.elements.firstNameInput.fill(order.firstName);
    await this.elements.lastNameInput.fill(order.lastName);

    await this.elements.addressInput.scrollIntoViewIfNeeded();
    await this.elements.addressInput.fill(order.address);
    await this.elements.cityInput.fill(order.city);
    await this.elements.CEPInput.fill(order.CEP);
    await this.elements.phoneInput.fill(order.phone);
  }
  async acceptTermsAndPlaceOrder() {
    await this.elements.checkboxTerms.click();
    await this.elements.placeOrderButton.click();
  }

}
