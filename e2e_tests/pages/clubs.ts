import { Page, Locator, expect } from '@playwright/test';
import { Navigation } from './navigation';

export class ClubsPage extends Navigation {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.heading = page.locator('h1', { hasText: 'ClUBS' }); 
    }

    /**
     * Navigates to the clubs page.
     */
    async navigate() {
        await this.page.goto('/studentlife/clubs');
    }

    /**
     * Verifies that we are on the clubs page by checking the heading.
     */
    async verifyPage() {
        await expect(this.heading).toBeVisible();
    }
}