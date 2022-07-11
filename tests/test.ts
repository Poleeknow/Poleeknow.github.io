import { expect, test } from '@playwright/test';


test('test fetching', async ({ page }) => {
    await page.goto('/');
    await page.locator('#getDogImg').click();
    expect(await page.textContent('#dog')).not.toBeNull();
});