import { test, expect } from '@playwright/test';

test.describe('Navigation tests', () => {
    // Always start from the homepage
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    // Test 1: Navigates to the homepage
    test('Navigates to the homepage', async ({ page }) => {
        await expect(page).toHaveURL('/')
    });

    // Test 2: Waits for the venue list to load
    test('Waits for the venue list to load', async ({ page }) => {
        await expect(page.locator('#venue-container')).toBeVisible();
    });

    // Test 3: Clicks the first venue and verifies the text "Venue details" in h1
    test('Clicks the first venue and verifies venue details page', async ({ page }) => {
        await page.locator('#venue-container a').first().click()

        // Verify we're on the venue details page
        await expect(page).toHaveURL(/\/venue\//);

        await page.waitForSelector('h1:has-text("Venue details:")', { state: 'visible' });
    });
});