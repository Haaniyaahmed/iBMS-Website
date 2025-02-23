import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { AboutPage } from '../pages/about';
import { TeamPage } from '../pages/team';
import { EventsPage } from '../pages/events';
import { ShopPage } from '../pages/shop';
import { ContactPage } from '../pages/contact';
import { ClubsPage } from '../pages/clubs';
import { MentorshipPage } from '../pages/mentorship';
import { ResourcesPage } from '../pages/resources';
import { Tech4GoodPage } from '../pages/tech4good';

test.describe('navigate to all pages using nav bar and footer links', () => {
    let homePage: HomePage;
    let aboutPage: AboutPage;
    let teamPage: TeamPage;
    let eventsPage: EventsPage;
    let shopPage: ShopPage;
    let contactPage: ContactPage;
    let clubsPage: ClubsPage;
    let mentorshipPage: MentorshipPage;
    let resourcesPage: ResourcesPage;
    let tech4GoodPage: Tech4GoodPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('should navigate to about page using navbar and footer links', async ({page}) => {

        aboutPage = new AboutPage(page);

        // navigate to about page using navbar link
        await homePage.navAboutLink.click();
        await aboutPage.verifyPage();

        // return to home page
        await aboutPage.navHomeLink.click();
        await homePage.verifyHomePage();

        // navigate to about page using footer link
        await homePage.footerAboutLink.click();
        await aboutPage.verifyPage();
    });

    test('should navigate to team page using navbar and footer links', async ({page}) => {

        teamPage = new TeamPage(page);

        // navigate to team page using navbar link
        await homePage.navTeamLink.click();
        await teamPage.verifyPage();

        // return to home page
        await teamPage.navHomeLink.click();
        await homePage.verifyHomePage();

        // navigate to team page using footer link
        await homePage.footerTeamLink.click();
        await teamPage.verifyPage();
    });

    test('should navigate to events page using navbar and footer links', async ({page}) => {

        eventsPage = new EventsPage(page);

        // navigate to events page using navbar link
        await homePage.navEventsLink.click();
        await eventsPage.verifyPage();

        // return to home page
        await eventsPage.navHomeLink.click();
        await homePage.verifyHomePage();

        // navigate to events page using footer link
        await homePage.footerEventsLink.click();
        await eventsPage.verifyPage();
    });

    test('should navigate to shop page using navbar and footer links', async ({page}) => {

        shopPage = new ShopPage(page);

        // navigate to shop page using navbar link
        await homePage.navShopLink.click();
        await shopPage.verifyPage();

        // return to home page
        await shopPage.navHomeLink.click();
        await homePage.verifyHomePage();

        // navigate to shop page using footer link
        await homePage.footerShopLink.click();
        await shopPage.verifyPage();
    });

    test('should navigate to contact page using navbar and footer links', async ({page}) => {

        contactPage = new ContactPage(page);

        // navigate to contact page using navbar link
        await homePage.navContactLink.click();
        await contactPage.verifyPage();

        // return to home page
        await contactPage.navHomeLink.click();
        await homePage.verifyHomePage();

        // navigate to contact page using footer link
        await homePage.footerContactLink.click();
        await contactPage.verifyPage();
    });

    test('should navigate to clubs page using navbar and footer links', async ({page}) => {

        clubsPage = new ClubsPage(page);

        // navigate to clubs page using navbar link
        await homePage.openStudentLifeDropdown();
        await homePage.navClubsLink?.click();
        await clubsPage.verifyPage();

        // return to home page
        await clubsPage.navHomeLink.click();
        await homePage.verifyHomePage();

        // navigate to clubs page using footer link
        await homePage.footerClubsLink.click();
        await clubsPage.verifyPage();
    });

    test('should navigate to mentorship page using navbar and footer links', async ({page}) => {

        mentorshipPage = new MentorshipPage(page);

        // navigate to mentorship page using navbar link
        await homePage.openStudentLifeDropdown();
        await homePage.navMentorshipLink?.click();
        await mentorshipPage.verifyPage();

        // return to home page
        await mentorshipPage.navHomeLink.click();
        await homePage.verifyHomePage();

        // navigate to mentorship page using footer link
        await homePage.footerMentorshipLink.click();
        await mentorshipPage.verifyPage();
    });

    test('should navigate to resources page using navbar and footer links', async ({page}) => {

        resourcesPage = new ResourcesPage(page);

        // navigate to resources page using navbar link
        await homePage.openStudentLifeDropdown();
        await homePage.navResourcesLink?.click();
        await resourcesPage.verifyPage();

        // return to home page
        await resourcesPage.navHomeLink.click();
        await homePage.verifyHomePage();

        // navigate to resources page using footer link
        await homePage.footerResourcesLink.click();
        await resourcesPage.verifyPage();
    });

    test('should navigate to tech4good page using navbar and footer links', async ({page}) => {

        tech4GoodPage = new Tech4GoodPage(page);

        // navigate to tech4good page using navbar link
        await homePage.openStudentLifeDropdown();
        await homePage.navTech4GoodLink?.click();
        await tech4GoodPage.verifyPage();

        // return to home page
        await tech4GoodPage.navHomeLink.click();
        await homePage.verifyHomePage();

        // navigate to tech4good page using footer link
        await homePage.footerTech4GoodLink.click();
        await tech4GoodPage.verifyPage();
    });
});