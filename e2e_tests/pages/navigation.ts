import { Page, Locator } from '@playwright/test';

export class Navigation {
    readonly page: Page;

    readonly navHomeLink: Locator;
    readonly navAboutLink: Locator;
    readonly navTeamLink: Locator;
    readonly navEventsLink: Locator;
    readonly navShopLink: Locator;
    readonly navContactLink: Locator;

    readonly navStudentLifeDropdown: Locator;
    navClubsLink: Locator | null = null;
    navMentorshipLink: Locator | null = null;
    navResourcesLink: Locator | null = null;
    navTech4GoodLink: Locator | null = null;

    readonly footerShopLink: Locator;
    readonly footerEventsLink: Locator;
    readonly footerTech4GoodLink: Locator;
    readonly footerAboutLink: Locator;
    readonly footerTeamLink: Locator;
    readonly footerContactLink: Locator;
    readonly footerClubsLink: Locator;
    readonly footerMentorshipLink: Locator;
    readonly footerResourcesLink: Locator;

    /**
     * Creates an instance of the Navigation class.
     *
     * @param {Page} page - The Playwright Page object representing the browser page.
     */
    constructor(page: Page) {
        this.page = page;

        // Navigation links
        this.navHomeLink = page.locator('nav a', {hasText: 'Home'});
        this.navTeamLink = page.locator('nav a', {hasText: 'Team'});
        this.navAboutLink = page.locator('nav a', {hasText: 'About'});
        this.navEventsLink = page.locator('nav a', {hasText: 'Events'});
        this.navShopLink = page.locator('nav a', {hasText: 'Shop'});
        this.navContactLink = page.locator('nav a', {hasText: 'Contact'});

        this.navStudentLifeDropdown = page.locator('nav button', {hasText: 'Student Life'});
        
        // Footer links
        this.footerShopLink = page.locator('footer a', {hasText: 'Shop'});
        this.footerEventsLink = page.locator('footer a', {hasText: 'Events'});
        this.footerTech4GoodLink = page.locator('footer a', {hasText: 'Tech4Good'});
        this.footerAboutLink = page.locator('footer a', {hasText: 'About Us'});
        this.footerTeamLink = page.locator('footer a', {hasText: 'Team'});
        this.footerContactLink = page.locator('footer a', {hasText: 'Contact'});
        this.footerClubsLink = page.locator('footer a', {hasText: 'Clubs'});
        this.footerMentorshipLink = page.locator('footer a', {hasText: 'Mentorship'});
        this.footerResourcesLink = page.locator('footer a', {hasText: 'Resources'});
    }

    /**
     * Opens the Student Life dropdown menu and waits for the nested links to be visible.
     */
    async openStudentLifeDropdown() {
        await this.navStudentLifeDropdown.click();
        await this.page.locator('nav a', {hasText: 'Clubs'}).waitFor({state: 'visible'}); // wait for the nested links to be visible
        this.navClubsLink = this.page.locator('nav a', {hasText: 'Clubs'});
        this.navMentorshipLink = this.page.locator('nav a', {hasText: 'Mentorship'});
        this.navResourcesLink = this.page.locator('nav a', {hasText: 'Resources'});
        this.navTech4GoodLink = this.page.locator('nav a', {hasText: 'Tech4Good'});
    }

    /**
     * Clicks the Clubs link in the Student Life dropdown.
     */
    async clickClubsLink() {
        await this.openStudentLifeDropdown();
        if (!this.navClubsLink) {
            throw new Error('Clubs link not found');
        }
        await this.navClubsLink.click();
    }

    /**
     * Clicks the Mentorship link in the Student Life dropdown.
     */
    async clickMentorshipLink() {
        await this.openStudentLifeDropdown();
        if (!this.navMentorshipLink) {
            throw new Error('Mentorship link not found');
        }
        await this.navMentorshipLink.click();
    }

    /**
     * Clicks the Resources link in the Student Life dropdown.
     */
    async clickResourcesLink() {
        await this.openStudentLifeDropdown();
        if (!this.navResourcesLink) {
            throw new Error('Resources link not found');
        }
        await this.navResourcesLink.click();
    }

    /**
     * Clicks the Tech4Good link in the Student Life dropdown.
     */
    async clickTech4GoodLink() {
        await this.openStudentLifeDropdown();
        if (!this.navTech4GoodLink) {
            throw new Error('Tech4Good link not found');
        }
        await this.navTech4GoodLink.click();
    }

}