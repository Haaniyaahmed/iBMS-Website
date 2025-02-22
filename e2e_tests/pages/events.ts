import { Page, Locator, expect } from '@playwright/test';
import { Navigation } from './navigation';

export class EventsPage extends Navigation {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.heading = page.locator('h1', { hasText: 'Events' }); 
    }

    /**
     * Navigates to the events page.
     */
    async navigate() {
        await this.page.goto('/events');
    }

    /**
     * Verifies that we are on the events page by checking the heading.
     */
    async verifyPage() {
        await expect(this.heading).toBeVisible();
    }
}