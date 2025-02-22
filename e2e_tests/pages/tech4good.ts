import { Page, Locator, expect } from '@playwright/test';
import { Navigation } from './navigation';

export class Tech4GoodPage extends Navigation {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.heading = page.getByText('TECH 4', {exact: true}); 
    }

    /**
     * Navigates to the tech4good page.
     */
    async navigate() {
        await this.page.goto('/studentlife/tech4good');
    }

    /**
     * Verifies that we are on the tech4good page by checking the heading.
     */
    async verifyPage() {
        await expect(this.heading).toBeVisible();
    }
}