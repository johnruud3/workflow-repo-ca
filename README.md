# Workflow repo for the CA

**My name is:** John Kristian G. Ruud

## Installation

1. npm install
2. npx playwright install
3. npm run dev (Remember to update node version to not get errors)

## Environment Variables

Create a `.env` file in the project root called `.env` with the following variables:

VITE_LOGIN_EMAIL=
VITE_LOGIN_PASSWORD=

## Whats installed for testing:

- Huskey - for pre-commit testing
- eslint - for code public or individual quality testing
- vitest - for unit testing
- playwright - for E2E testing

## Commands for testing:

**Huskey will run the following commands before each commit (pre-commit):**

- npx eslint . --fix
- npx prettier --write .
- npm test

**Unit Tests**

- npm test - runs vitest
- npm run test:watch - runs vitest in watch mode

**E2E Tests**

- npm run test:e2e - runs playwright e2e tests
- npm run test:e2e:ui - runs playwright e2e tests in headed mode ("Debug" mode)
- npm run test:e2e:headed - runs playwright e2e tests in headed mode (Automatically)

## Code Quality Commands:

**Linting**

- npx eslint . --fix - runs ESLint and automatically fixes issues (Code quality and potential bugs)

**Formatting**

- npx prettier --write . - formats all code with Prettier (line breaks, quote styles, etc.)

**Pre-commit Hooks**

- Husky are used to set up pre-commit hooks to automatically run testing and checks before each commit

## Test types:

- **Unit Tests** looks for(`.test.js` files)
  - Uses Vitest

- **E2E Tests** looks for (`.spec.js` files)
  - Uses Playwright
