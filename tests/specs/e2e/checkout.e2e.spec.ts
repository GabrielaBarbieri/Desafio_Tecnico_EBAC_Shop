import { test, expect } from "@playwright/test";
import { login, navigateToProductPage } from "../../flows/login.flow";
import { User } from "../../fixtures/interfaces/login.model";
import { ProductsPage } from "../../pages/products";
import { CartPage } from "../../pages/cart";
import { CheckoutPage } from "../../pages/checkout";
import orderData from "../../fixtures/datas/order.json";
import { CartAssertions } from "../../assertions/cart.assertions";
import { CheckoutAssertions } from "../../assertions/checkout.assertions";

test("Deve permitir ao usuário realizar o fluxo completo de compra com sucesso", async ({
  page,
}) => {
  const user: User = {
    email: process.env.USER_EMAIL!,
    password: process.env.USER_PASSWORD!,
  };

  await login(page, user);
  await navigateToProductPage(page);

  const productsPage = new ProductsPage(page);
  await productsPage.clickProduct();
  await productsPage.addProductToCart();

  const cartPage = new CartPage(page);
  const cartAssertions = new CartAssertions(page);
  await cartPage.goToCart();
  await cartAssertions.cartPageIsVisible();
  await cartPage.updateCartItemQuantity();

  const checkoutPage = new CheckoutPage(page);
  const checkoutAssertions = new CheckoutAssertions(page);
  await checkoutPage.goCheckout();
  await checkoutAssertions.validateCheckoutPage();
  await checkoutPage.fillCheckoutForm(orderData.order);
  await checkoutPage.acceptTermsAndPlaceOrder();

  await checkoutAssertions.validateOrderReceived();
});
