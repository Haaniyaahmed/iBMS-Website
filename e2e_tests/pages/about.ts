import { Page, Locator, expect } from '@playwright/test';
import { Navigation } from './navigation';

export class AboutPage extends Navigation {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.heading = page.locator('h1', { hasText: 'About' });
    }

    /**
     * Navigates to the About page.
     */
    async navigate() {
        await this.page.goto('/about');
    }

    /**
     * Verifies that we are on the About page by checking the heading.
     */
    async verifyPage() {
        await expect(this.heading).toBeVisible();
    }
}