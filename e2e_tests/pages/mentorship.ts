import { Page, Locator, expect } from '@playwright/test';
import { Navigation } from './navigation';

export class MentorshipPage extends Navigation {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.heading = page.getByText('MENTORSHIP', {exact: true}); 
    }

    /**
     * Navigates to the mentorship page.
     */
    async navigate() {
        await this.page.goto('/studentlife/mentorship');
    }

    /**
     * Verifies that we are on the mentorship page by checking the heading.
     */
    async verifyPage() {
        await expect(this.heading).toBeVisible();
    }
}