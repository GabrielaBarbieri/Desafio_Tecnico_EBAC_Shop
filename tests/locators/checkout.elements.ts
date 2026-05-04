import { Page, Locator } from "@playwright/test";

export class CheckoutPageElements {
  readonly page: Page;
  readonly proceedToCheckoutButton: Locator;
  readonly checkoutPage: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly zipCodeInput: Locator;
  readonly phoneInput: Locator;
  readonly checkboxTerms: Locator;
  readonly placeOrderButton: Locator;
  readonly orderReceivedMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.proceedToCheckoutButton = page.locator("a", {
      hasText: " Concluir compra",
    });
    this.checkoutPage = page.locator("h1", { hasText: "Checkout" });
    this.firstNameInput = page.locator("#billing_first_name");
    this.lastNameInput = page.locator("#billing_last_name");
    this.addressInput = page.locator("#billing_address_1");
    this.cityInput = page.locator("#billing_city");
    this.zipCodeInput = page.locator("#billing_postcode");
    this.phoneInput = page.locator("#billing_phone");
    this.checkboxTerms = page.locator("#terms");
    this.placeOrderButton = page.locator("input", {
      hasText: "Finalizar compra",
    });
    this.orderReceivedMessage = page.locator("h1", {
      hasText: "Pedido Recebido",
    });
  }
}