import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.intercept('POST', 'https://events.backtrace.io/api/unique-events/*', {
      statusCode: 200,
      body: {},
    });
    cy.intercept('POST', 'https://events.backtrace.io/api/summed-events/*', {
      statusCode: 200,
      body: {},
    });
  });

Given('a user is on the login page', () => {    
    cy.visit('https://www.saucedemo.com', { timeout: 5000 });
    cy.url().should('include', 'saucedemo.com');
    cy.get('#login-button').should('exist');
});

When('the user submits credentials {string} and {string}', (username, password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  });

Then('the user is able to login', () => {
    cy.url().should('include', 'www.saucedemo.com/inventory.html');
});

Then('the user is not able to login', () => {
    cy.url().should('include', 'www.saucedemo.com');
});

Then('the product page should load in less than 1 second', () => {
    const startTime = performance.now();

    cy.get('#inventory_container').should('exist');
    cy.get('#react-burger-menu-btn').should('exist');

    const endTime = performance.now();
    const loadTime = endTime - startTime;

    expect(loadTime).to.be.lessThan(1000); // Load time should be less than 1000 milliseconds (1 second)
});

Then('the user should see an error message {string}', (errorMessage) => {
    cy.get('.error-message-container').should('exist');
    cy.get('.error-message-container').should('contain', errorMessage);
});

When('the user opens the navigation menu', () => {
    cy.get('#react-burger-menu-btn').click();
}); 

Then('the user clicks on the logout button', (dataTable) => {
    cy.get('#logout_sidebar_link').click();
});

Then('the user should be logged out', () => {
    cy.url().should('include', 'www.saucedemo.com');
});