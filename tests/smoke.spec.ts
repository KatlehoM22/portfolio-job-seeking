import {test, expect} from '@playwright/test';

test('should load the home page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Portfolio Job Seeking/);
    await expect(page.getByRole('heading', { name: /Welcome to/ })).toBeVisible();
});