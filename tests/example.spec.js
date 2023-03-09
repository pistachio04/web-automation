import { test, expect } from '@playwright/test';

test('Login with invalid credential', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('passwordsalah');
  await page.locator('[data-test="login-button"]').click();
  const heading = page.locator('h3');
  await expect(heading).toContainText(/.*Username and password do not match any user in this service/);
});

test('Login with valid credential', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveTitle(/Swag Labs/);
  await expect(page).toHaveURL(/.*inventory.html/);
});

test('Product Order', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Sigid');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Belajar');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('55823');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  const span = page.locator('span');
  await expect(span).toContainText(/.*Checkout: Complete!/);
  // await page.getByText('Checkout: Complete!').click();
  // await page.getByRole('heading', { name: 'Thank you for your order!' }).click();
});


// @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

// import { test, expect } from '@playwright/test';

// test('tes to do', async ({ page }) => {
//   await page.goto('https://demo.playwright.dev/todomvc/');
//   await page.goto('https://demo.playwright.dev/todomvc/#/');
//   await page.getByPlaceholder('What needs to be done?').click();
//   await page.getByPlaceholder('What needs to be done?').fill('Bangun Siang');
//   await page.getByPlaceholder('What needs to be done?').press('Enter');
// });