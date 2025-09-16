# JavaScript BDD: Test Automation with Cypress and Cucumber

[![Cypress](https://img.shields.io/badge/Cypress-12.0.0-00C58E?style=flat-square&logo=cypress)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-BDD-23D96C?style=flat-square&logo=cucumber)](https://cucumber.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)

A comprehensive JavaScript test automation project that combines **Cypress** for end-to-end testing with **Cucumber** for Behavior-Driven Development (BDD). This project demonstrates modern web application testing practices using industry-standard tools and frameworks.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project serves as a practical implementation of BDD testing methodology using JavaScript, Cypress, and Cucumber. It provides a solid foundation for web application test automation with clear separation of concerns between test scenarios (written in Gherkin) and implementation code.

The project includes:
- Feature files written in Gherkin syntax
- Step definitions for test implementation
- Cypress configuration and custom commands
- Comprehensive test coverage for web application functionality

## Features

- ✅ **BDD Testing**: Write tests in plain English using Gherkin syntax
- ✅ **Cypress Integration**: Leverage Cypress's powerful testing capabilities
- ✅ **Cross-browser Support**: Test across different browsers and devices
- ✅ **API Testing**: Built-in support for API endpoint testing
- ✅ **Visual Testing**: Screenshot and video recording capabilities
- ✅ **Parallel Execution**: Run tests in parallel for faster feedback
- ✅ **CI/CD Ready**: Easy integration with continuous integration pipelines

## Technologies Used

### [Cypress](https://www.cypress.io/)
A modern end-to-end testing framework that runs directly in the browser, providing:
- Real-time test execution and debugging
- Automatic waiting and retry mechanisms
- Built-in network request mocking and stubbing
- Time-travel debugging capabilities
- Screenshot and video recording

### [Cucumber](https://cucumber.io/)
A BDD testing tool that supports:
- Gherkin syntax for readable test scenarios
- Collaboration between technical and non-technical team members
- Living documentation that stays in sync with code
- Step definition mapping for test implementation

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/alxHalwey/js-cypress.git
   cd js-cypress
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   npx cypress verify
   ```

## Usage

### Opening the Test Runner

To open the Cypress Test Runner with a graphical interface:

```bash
npx cypress open
```

### Running Tests in Headless Mode

To run all tests in headless mode:

```bash
npx cypress run
```

### Running Specific Tests

To run tests for a specific feature:

```bash
npx cypress run --spec "cypress/integration/features/login.feature"
```

### Running Tests in Different Browsers

```bash
# Chrome
npx cypress run --browser chrome

# Firefox
npx cypress run --browser firefox

# Edge
npx cypress run --browser edge
```

## Project Structure

```
js-cypress/
├── cypress/                          # Cypress test files and configurations
│   ├── integration/                  # Test specifications
│   │   └── features/                 # Cucumber feature files
│   │       └── login.feature         # Login test scenarios
│   ├── support/                      # Support files and custom commands
│   │   ├── commands.js              # Custom Cypress commands
│   │   └── step_definitions/        # Cucumber step definitions
│   │       └── login_steps.js       # Login step implementations
│   └── fixtures/                     # Test data files
├── node_modules/                     # Project dependencies
├── package.json                      # Project metadata and dependencies
├── cypress.json                      # Cypress configuration
├── .gitignore                        # Git ignore rules
└── README.md                         # Project documentation
```

## Running Tests

### Available Test Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests in headless mode |
| `npm run test:open` | Open Cypress Test Runner |
| `npm run test:chrome` | Run tests in Chrome browser |
| `npm run test:firefox` | Run tests in Firefox browser |
| `npm run test:headed` | Run tests in headed mode |

### Test Execution Options

```bash
# Run with verbose output
npx cypress run --reporter spec

# Run specific test file
npx cypress run --spec "cypress/integration/features/**/*.feature"

# Run tests in parallel
npx cypress run --parallel

# Generate test report
npx cypress run --reporter junit --reporter-options "mochaFile=results/results-[hash].xml"
```

## Contributing

We welcome contributions to this project! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write clear and descriptive commit messages
- Add tests for new functionality
- Update documentation as needed
- Ensure all tests pass before submitting a PR

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note**: This project is currently under active development. Some features may be experimental or subject to change.
