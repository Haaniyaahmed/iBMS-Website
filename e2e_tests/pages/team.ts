import { Page, Locator, expect } from '@playwright/test';
import { Navigation } from './navigation';

export class TeamPage extends Navigation {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.heading = page.locator('text=Meet our team'); 
    }

    /**
     * Navigates to the Team page.
     */
    async navigate() {
        await this.page.goto('/team');
    }

    /**
     * Verifies that we are on the Team page by checking the heading.
     */
    async verifyPage() {
        await expect(this.heading).toBeVisible();
    }
}