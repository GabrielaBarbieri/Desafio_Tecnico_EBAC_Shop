import { Page, expect } from "@playwright/test";
import { ProductsPageElements } from "../locators/products.elements";

export class ProductsPage {
  readonly elements: ProductsPageElements;

  constructor(private page: Page) {
    this.elements = new ProductsPageElements(page);
  }
  async clickProduct() {
    await this.elements.productLink.scrollIntoViewIfNeeded();
    await this.elements.productLink.click();
  }

  async addProductToCart() {
    await this.page.waitForLoadState("networkidle");
    await this.elements.size.click();
    await this.elements.color.click();
    await this.elements.addToCartButton.scrollIntoViewIfNeeded();
    await this.page.screenshot({ path: "size-selected.png" });
    await this.elements.addToCartButton.click();
    await this.page.waitForLoadState("networkidle");
  }
}
