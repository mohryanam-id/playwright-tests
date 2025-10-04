import { test, expect } from '@playwright/test';

test.describe.parallel('Playwright docs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    await Promise.all([
      page.waitForNavigation({ url: '**/docs/intro' }),
      page.getByRole('link', { name: 'Get started' }).click(),
    ]);

    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});
