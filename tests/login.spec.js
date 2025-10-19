import { test, expect } from '@playwright/test';

const EMAIL = process.env.VITE_LOGIN_EMAIL;
const PASSWORD = process.env.VITE_LOGIN_PASSWORD;

// Test 1: User can successfully log in with valid credentials from environment variables
test('User can successfully log in with valid credentials', async ({ page }) => {
  test.skip(!EMAIL || !PASSWORD, 'VITE_LOGIN_EMAIL and VITE_LOGIN_PASSWORD must be set in a .env file');

  await page.goto('/login/');
  await page.locator('input[name="email"]').fill(EMAIL);
  await page.locator('input[name="password"]').fill(PASSWORD);
  await page.locator('button[type="submit"]').click();

  // Should redirect to root URl
  await expect(page).toHaveURL('/');
});

// Test 2: User sees an error message with invalid credentials
test('User sees an error message with invalid credentials', async ({ page }) => {
  await page.goto('/login/');
  await page.locator('input[name="email"]').fill('invalid@example.com');
  await page.locator('input[name="password"]').fill('wrongpassword');
  await page.locator('button[type="submit"]').click();

  // Should show error message
  const message = page.locator('#message-container');
  await expect(message).toBeVisible();
  await expect(message).toContainText(/noroff\.no|invalid|fail|error/i);

  // Should stay on login page
  await expect(page).toHaveURL('/login/');
});


// NOTE: Test and look at the warning for login test with e2e