import { Page, Locator, expect } from '@playwright/test';
import { Navigation } from './navigation';

export class ShopPage extends Navigation {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.heading = page.locator('h1', { hasText: 'MERCHANDISE' }); 
    }

    /**
     * Navigates to the shop page.
     */
    async navigate() {
        await this.page.goto('/shop');
    }

    /**
     * Verifies that we are on the shop page by checking the heading.
     */
    async verifyPage() {
        await expect(this.heading).toBeVisible();
    }
}