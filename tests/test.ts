import { expect, test } from '@playwright/test';

test('index page has action', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByText('Title')
  ).toBeVisible();
});
