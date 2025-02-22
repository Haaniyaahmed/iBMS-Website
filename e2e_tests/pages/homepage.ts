import { Page, Locator, expect } from '@playwright/test';
import { Navigation } from './navigation';

/**
 * HomePage class represents the home page of the website.
 * It provides methods to interact with the home page elements and perform actions.
 * Use this class to test out new parts of the UI instead of writing logic directly in the tests.
 * Follow the Page Object Model (POM) abstraction to keep tests clean, reusable, and maintainable.
 * Add new locators and methods to this class as the UI evolves.
 *
 * @example
 * // Usage in a test:
 * const homePage = new HomePage(page);
 * await homePage.navigate();
 * await homePage.clickJoinButton();
 */
export class HomePage extends Navigation {
    readonly page: Page;
    readonly headingTop: Locator;
    readonly headingBottom: Locator;

    /**
     * Creates an instance of the HomePage class.
     *
     * @param {Page} page - The Playwright Page object representing the browser page.
     */
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.headingTop = page.getByText('IBIOMED', {exact: true});
        this.headingBottom = page.getByText("SOCIETY", {exact: true});
    }

    /**
     * Navigates to the home page of the website.
     * Uses the `baseURL` defined in the Playwright configuration.
     */
    async navigate() {
        await this.page.goto('/'); // Navigates to the base URL
    }

    /**
     * Verifies that we are on the home page by checking the heading.
     */
    async verifyHomePage() {
        await expect(this.headingTop).toBeVisible();
        await expect(this.headingBottom).toBeVisible();
    }
}