import { test, expect } from '@playwright/test';

test('hello world is shown', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('hello-world')).toContainText('Hello World')
});
