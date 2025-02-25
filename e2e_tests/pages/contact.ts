import { Page, Locator, expect } from '@playwright/test';
import { Navigation } from './navigation';

/**
 * Represents the Contact Page in the application.
 * Provides methods to interact with and test the contact form.
 */
export class ContactPage extends Navigation {
    readonly page: Page;
    readonly heading: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly messageInput: Locator;
    readonly sendButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.heading = page.locator('h1', { hasText: 'Contact' }); 
        this.nameInput = page.locator('input[name="name"]');
        this.emailInput = page.locator('input[name="email"]');
        this.subjectInput = page.locator('input[name="subject"]');
        this.messageInput = page.locator('textarea[name="message"]');
        this.sendButton = page.locator('button', { hasText: 'Send Message' });
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

    /**
     * Fills out the contact form.
     * @param name - The name to enter.
     * @param email - The email to enter.
     * @param subject - The subject to enter.
     * @param message - The message to enter.
     */
    async fillForm(name: string, email: string, subject: string, message: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.subjectInput.fill(subject);
        await this.messageInput.fill(message);
    }

    /**
     * Submits the contact form.
     */
    async submitForm() {
        await this.sendButton.click();
    }

    /**
     * Verifies that the form submission was successful.
     */
    async verifySuccessMessage() {
        const successMessage = this.page.getByText('Message sent successfully!');
        await expect(successMessage).toBeVisible();
    }

    /**
     * Verifies that the form submission was unsuccessful.
     */
    async verifyErrorMessage() {
        const errorMessage = this.page.locator('div', { hasText: 'Failed to send message.' });
        await expect(errorMessage).toBeVisible();  
    }

    /**
     * Verifies that email domain is invalid.
     */
    async verifyInvalidEmail() {
        const errorMessage = this.page.locator('div', { hasText: 'Invalid domain or email does not exist.' });
        await expect(errorMessage).toBeVisible();
    }

    /**
     * Checks the validation message for a specific field.
     * @param fieldName - The name of the field to check (e.g., 'name', 'email').
     * @param expectedMessage - The expected validation message.
     */
    async checkValidationMessage(fieldName: string, expectedMessage: string) {
        const validationMessage = await this.page.evaluate((fieldName) => {
            const input = document.querySelector(`input[name="${fieldName}"], textarea[name="${fieldName}"]`);
            return input ? (input as HTMLInputElement | HTMLTextAreaElement).validationMessage : null;
        }, fieldName);

        expect(validationMessage).toBe(expectedMessage);
    }
}