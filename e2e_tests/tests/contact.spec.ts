import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/contact';

test.describe('Contact Page Tests', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigate();
        await contactPage.verifyPage();
    });

    test('Verify Contact Page Elements', async () => {
        // Verify all form elements are visible
        await expect(contactPage.nameInput).toBeVisible();
        await expect(contactPage.emailInput).toBeVisible();
        await expect(contactPage.subjectInput).toBeVisible();
        await expect(contactPage.messageInput).toBeVisible();
        await expect(contactPage.sendButton).toBeVisible();
    });

    test('Submit Contact Form with Valid Data', async () => {
        // Fill out the form
        await contactPage.fillForm('John Doe', 'john.doe@example.com', 'Test Subject', 'This is an automated test for valid emails');

        // Submit the form
        await contactPage.submitForm();

        // Verify success message
        await contactPage.verifySuccessMessage();
    });

    test('Check HTML5 email validation', async () => {
        // Fill out the form with no @ sign in email
        await contactPage.fillForm('John Doe', 'john.doe', 'Test Subject', 'This is an automated test for invalid emails');
        await contactPage.submitForm();
        await contactPage.checkValidationMessage('email', 'Please include an \'@\' in the email address. \'john.doe\' is missing an \'@\'.');
        
        // Fill out the form with no domain in email
        await contactPage.fillForm('John Doe', 'ayushpatel@', 'Test Subject', 'This is an automated test for invalid emails');
        await contactPage.submitForm();
        await contactPage.checkValidationMessage('email', 'Please enter a part following \'@\'. \'ayushpatel@\' is incomplete.');

        // fill out the form with no username in email
        await contactPage.fillForm('John Doe', '@gmail.com', 'Test Subject', 'This is an automated test for invalid emails');
        await contactPage.submitForm();
        await contactPage.checkValidationMessage('email', 'Please enter a part followed by \'@\'. \'@gmail.com\' is incomplete.');
    })

    test('Submit Contact Form with invalid email', async () => {
        // Fill out the form with invalid email
        await contactPage.fillForm('Ayush Patel', 'ayushpatel.2026@gmal.com', 'Test Subject', 'This is an automated test for invalid emails');

        // Submit the form
        await contactPage.submitForm();

        // Verify error message
        await (expect(contactPage.page.getByText('Invalid domain or email does not exist.')).toBeVisible());

        await contactPage.fillForm('Ayush Patel', 'ayushpatel.2026@gmail', 'Test Subject', 'This is an automated test for invalid emails');

        // Submit the form
        await contactPage.submitForm();

        // Verify error message
        await (expect(contactPage.page.getByText('Invalid domain or email does not exist.')).toBeVisible());
    
        
    });

    test('Submit Contact Form with empty fields', async () => {
        
        // Submit empty form
        await contactPage.submitForm();
        await contactPage.checkValidationMessage('name', 'Please fill out this field.');

        // Submit form with only name
        await contactPage.fillForm('Ayush Patel', '', '', '');
        await contactPage.submitForm();
        await contactPage.checkValidationMessage('email', 'Please fill out this field.');

        // submit form with no message
        await contactPage.fillForm('Ayush Patel', 'ayushpatel.2026@gmail.com', 'Test Subject', '');
        await contactPage.submitForm();
        await contactPage.checkValidationMessage('message', 'Please fill out this field.');
        
    });
});