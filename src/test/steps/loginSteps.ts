import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {
    await fixture.page.goto(process.env.BASEURL, { timeout: 60000 });
    fixture.logger.info("Navigated to the application")
})

Given('User click on the login link', async function () {
    await fixture.page.locator("(//li[@class='authorization-link']//a)[1]").click();
});

Given('User enters the username {string}', async function (username) {
    if (!fixture.page) {
      throw new Error("Page is not initialized. Ensure that BeforeAll hook is running properly.");
    }
    await fixture.page.locator("//input[@title='Email']").fill(username); // Replaced `type` with `fill` for better reliability
  });
  
  Given('User enters the password {string}', async function (password) {
    if (!fixture.page) {
      throw new Error("Page is not initialized. Ensure that BeforeAll hook is running properly.");
    }
    await fixture.page.locator("//input[@title='Password']").fill(password);
  });
  
  When('User clicks on the login button', async function () {
    if (!fixture.page) {
      throw new Error("Page is not initialized. Ensure that BeforeAll hook is running properly.");
    }
    const loginButton = fixture.page.locator("//button[contains(@class,'action login')]");
    await loginButton.waitFor({ state: 'visible', timeout: 200000 });
    await loginButton.click();
  });
  
  Then('Login should be successful', async function () {
    if (!fixture.page) {
      throw new Error("Page is not initialized. Ensure that BeforeAll hook is running properly.");
    }
    const loggedInText = fixture.page.locator("(//span[@class='logged-in'])[1]");
    await loggedInText.waitFor({ state: 'visible', timeout: 60000 });
    const textpass = await loggedInText.textContent();
    console.log(`Logged in text: ${textpass}`);
    expect(textpass).not.toBeNull(); // check Assert that logged-in text is not null 
  });
