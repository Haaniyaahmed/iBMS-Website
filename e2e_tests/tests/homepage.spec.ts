import { test, expect } from '@playwright/test';

test('Homepage has the correct title', async ({ page }) => {
  await page.goto('http://localhost:3001');  
	await expect(page.getByText("Official Student Society of McMaster iBioMed Program")).toBeVisible();

});