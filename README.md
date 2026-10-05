# Automation Project with Playwright

A UI automation testing project built with **Playwright** and **TypeScript**.

This project focuses on practical end-to-end testing using the **Page Object Model (POM)**, reusable page components, test data, and Playwright's built-in assertions and debugging tools.

## Tech Stack

- **Playwright** – End-to-end browser automation
- **TypeScript** – Test development language
- **Node.js / npm** – Project and dependency management
- **Page Object Model (POM)** – Maintainable page interaction layer

## Project Structure

```text
MyNewProject/
├── tests/
│   ├── pages/
│   │   ├── testdata/
│   │   │   └── testusers.json
│   │   ├── loginpage.ts
│   │   └── pommanager.ts
│   │
│   └── specs/
│       ├── loginpage.spec.ts
│       └── example.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

## Design Approach

### Page Object Model

Page-specific locators and actions are kept inside page classes. Tests use those methods instead of interacting directly with page selectors wherever possible.

Example:

```ts
await pom.loginPage.signUp("username", "password");
```

### POM Manager

`pommanager.ts` is used to create and manage page objects from a single place.

### Test Data

Reusable test data can be stored in JSON files such as:

```json
{
  "username": "practice",
  "password": "SuperSecretPassword!"
}
```

and imported into tests when needed.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ziadadel253/Automation_Project-with-Playwright.git
cd Automation_Project-with-Playwright
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

> On Windows PowerShell, if script execution prevents `npm`/`npx` from running, use `npm.cmd` / `npx.cmd` or configure the PowerShell execution policy for the current user.

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/specs/loginpage.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test tests/specs/loginpage.spec.ts --headed
```

Run tests in Debug Mode:

```bash
npx playwright test tests/specs/loginpage.spec.ts --debug
```

Run tests in UI Mode:

```bash
npx playwright test --ui
```

Run a specific test by title:

```bash
npx playwright test -g "Valid Login"
```

## Debugging

Playwright provides several useful debugging options:

- `--debug` – opens Playwright Inspector and runs step by step.
- `--headed` – runs the browser visibly.
- `--ui` – opens Playwright UI Mode.
- `page.pause()` – pauses execution at a specific point in a test.

Example:

```ts
await page.goto("https://example.com");
await page.pause();
```

## Assertions

The project uses Playwright's `expect` assertions for validation.

Example:

```ts
await expect(page.getByRole("heading", { name: "Dashboard" }))
  .toBeVisible();
```

## Current Practice Areas

The project includes examples and practice tests covering concepts such as:

- Login and Sign Up flows
- Locators and role-based selectors
- Assertions
- Dialog handling
- File uploads
- Iframes and nested iframes
- Page Object Model
- Test data from JSON
- Playwright Debug Mode and UI Mode

## Author

**Ziad Adel**

GitHub: https://github.com/ziadadel253
