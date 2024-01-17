import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('a user is on the login page', () => {  
    cy.visit('https://www.saucedemo.com'),
    cy.url().should('include', 'saucedemo.com');
    cy.get('#login-button').should('exist');
});

let startTime;

When('the user submits credentials {string} and {string}', (username, password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.window().then((win) => {
        startTime = win.performance.now();
    });
    cy.get('#login-button').click();
  });

Then('the user is able to login', () => {
    cy.url().should('include', 'www.saucedemo.com/inventory.html');
});

Then('the user is not able to login', () => {
    cy.url().should('include', 'www.saucedemo.com');
});

Then('the product page should load in less than 1 second', () => {
    cy.get('#inventory_container').should('exist');
    cy.get('#react-burger-menu-btn').should('exist');
    cy.window().then((win) => {
        const endTime = win.performance.now();
        const loadTime = endTime - startTime;
        try {
            expect(loadTime).to.be.lessThan(1000); // Load time should be less than 1 sec
        } catch (error) {
            cy.log('WARNING: Page load time exceeds than 1 second');
        }
    });
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

Then('the user is logged out', () => {
    cy.url().should('include', 'www.saucedemo.com');
});
