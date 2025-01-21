import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";


setDefaultTimeout(60*1000*2)

Given('User clicks on the login link', async function () {
    await fixture.page.locator("(//li[@class='authorization-link']//a)[1]").click();
});

Given('User searches for a {string}', async function (Dress) {
  // Ensure page is not undefined
  if (!fixture.page) {
    throw new Error("Page is not defined");
  }
  
  // Use .fill() to enter text into the search box, and make sure the dropdown selection is clicked properly
  await fixture.page.locator("(//input[@class='input-text'])[1]").fill(Dress); // Use `.fill()` to clear and enter text
  await fixture.page.locator("//div[@id='search_autocomplete']//li[1]").click(); // Select the first item from dropdown
  await fixture.page.locator("//a[normalize-space(text())='Proteus Fitness Jackshirt']").click(); // Click on the search result
});

When('User adds the dress to the cart', async function () {
  // Ensure page is not undefined
  if (!fixture.page) {
    throw new Error("Page is not defined");
  }

  // Add size, color options, and click the "Add to Cart" button
  await fixture.page.locator("(//div[@class='swatch-option text'])[1]").click(); // Select size option
  await fixture.page.locator("(//div[@class='swatch-option color'])[1]").click(); // Select color option
  await fixture.page.locator("//button[contains(.,'Add to Cart')]").click(); // Click the Add to Cart button
});

Then('The cart badge should get updated', async function () {
  // Ensure page is not undefined
  if (!fixture.page) {
    throw new Error("Page is not defined");
  }
  await fixture.page.waitForTimeout(10000);
  // Verify that the cart badge updates after adding the item to the cart
  const badgeCount = await fixture.page.locator("//span[contains(@class,'counter qty')]//span[1]").textContent();
  expect(Number(badgeCount?.trim())).toBeGreaterThan(0); // Ensure the badge count is a valid number greater than 0
});
