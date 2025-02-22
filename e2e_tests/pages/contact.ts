import { Page, Locator, expect } from '@playwright/test';
import { Navigation } from './navigation';

export class ContactPage extends Navigation {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.heading = page.locator('h1', { hasText: 'Contact' }); 
    }

    /**
     * Navigates to the Contact page.
     */
    async navigate() {
        await this.page.goto('/contact');
    }

    /**
     * Verifies that we are on the Contact page by checking the heading.
     */
    async verifyPage() {
        await expect(this.heading).toBeVisible();
    }
}