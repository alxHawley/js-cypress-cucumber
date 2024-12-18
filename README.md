# js-cypress
 
This is a JS & Cypress BDD project that utilizes the Cucumber framework. It will be replicate my python-behave project - simply practice in creating test automation with different langauges, frameworks, and tools. This project (WIP) is a just behind the python-behave project, but it has a feature file and related steps file for login tests. I've not decided on an API tool for JS but that will be included in this project.

## Cypress Test Automation

Cypress is a powerful end-to-end testing framework for web applications. It allows developers to write tests in JavaScript, providing a rich set of features for interacting with the DOM, making assertions, and controlling the browser. Cypress runs directly in the browser, giving it access to everything happening on the page, which makes it easy to debug and understand test failures. It also comes with built-in support for mocking and stubbing network requests, making it a comprehensive tool for testing modern web applications.

https://www.cypress.io/

## Cucumber BDD Framework

Cucumber is a testing tool that supports Behavior-Driven Development (BDD). BDD is a software development approach that encourages collaboration between developers, testers, and business stakeholders. Cucumber allows you to write test scenarios in plain language using Gherkin syntax, making it easier for non-technical team members to understand and contribute to the test cases. These scenarios are then mapped to code, which executes the tests. This approach helps ensure that the software meets business requirements and improves communication within the team.

https://cucumber.io/

## Installation/ Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/alxHalwey/js-cypress.git
    cd js-cypress
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Install Cucumber:**
    ```bash
    npm install --save-dev @cucumber/cucumber
    ```

4. **Open Cypress Test Runner:**
    ```bash
    npx cypress open
    ```
    
    OR

5. **Run tests:**
    ```bash
    npx cypress run
    ```

## Directory Structure

- `cypress/`: Contains Cypress test files and configurations.
  - `integration/`: Contains test specifications.
    - `features/`: Contains Cucumber feature files.
  - `support/`: Contains support files and custom commands.
- `node_modules/`: Contains project dependencies.
- `package.json`: Contains project metadata and dependencies.
- `cypress.json`: Cypress configuration file.
- `README.md`: Project documentation.
