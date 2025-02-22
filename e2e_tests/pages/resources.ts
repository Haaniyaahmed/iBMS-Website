import { Page, Locator, expect } from '@playwright/test';
import { Navigation } from './navigation';

export class ResourcesPage extends Navigation {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.heading = page.locator('h1', { hasText: 'Resources' }); 
    }

    /**
     * Navigates to the resources page.
     */
    async navigate() {
        await this.page.goto('/studentlife/resources');
    }

    /**
     * Verifies that we are on the Resources page by checking the heading.
     */
    async verifyPage() {
        await expect(this.heading).toBeVisible();
    }
}