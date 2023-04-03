import { expect, test } from '@playwright/test';

test('index page has use cases overview', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Use cases')).toBeVisible();
});
