# Playwright

## 🚀 Setup

Initialize a new Playwright project:

```bash
npm init playwright@latest
```

This will guide you through selecting browsers, language (TS/JS), and test setup.

---

## 🧪 Test Generator

Use the codegen command to run the test generator followed by the URL of the website you want to generate tests for.

```bash
npx playwright codegen demo.playwright.dev/todomvc
```

---

## 📂 Project Structure

After initialization, you’ll get something like:

```bash
playwright.config.ts         # Playwright test configuration
package.json
package-lock.json            # or yarn.lock / pnpm-lock.yaml
tests/
  example.spec.ts            # Minimal example test
```

---

## ▶️ Usage

### Running Tests

```bash
npx playwright test
```

Common options:

- Run with browser UI visible:  

  ```bash
  npx playwright test --headed
  ```

- Run with a specific browser:  

  ```bash
  npx playwright test --project=chromium
  ```

- Run a single test file:  

  ```bash
  npx playwright test tests/example.spec.ts
  ```

- Run files file that have landing or login in the file name

  ```bash
  npx playwright test landing login
  ```

- Run with a specific title

  ```bash
  npx playwright test -g "add a todo item"
  ```

- Run last failed tests a specific title

  ```bash
  npx playwright test --last-failed
  ```

- Run with specific report format

  ```bash
  npx playwright test --reporter=list # It prints a line for each test being run.
  ```

  ```bash
  npx playwright test --reporter=line #  It uses a single line to report last finished test, and prints failures when they occur
  ```

  ```bash
  npx playwright test --reporter=dot # it only produces a single character per successful test run.
  ```

  ```bash
  npx playwright test --reporter=html # a self-contained folder that contains report for the test run that can be served as a web page.
  ```

  ```bash
  npx playwright test --reporter=blob # contain all the details about the test run and can be used later to produce any other report. (zip file)
  ```

  ```bash
  PLAYWRIGHT_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json # produces an object with all information about the test run.
  ```
  
  ```bash
  PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit # produces a JUnit-style xml report.reporter
  ```

  ```bash
  npx playwright test --reporter="./myreporter/my-awesome-reporter.ts" # custom reporter
  ```

---

### Debugging

- Debugging in UI Mode

  ```bash
  npx playwright test --ui
  ```

- Debugging in Playwright Inspector

  ```bash
  npx playwright test --ui
  ```

---

### Tracing

Tracing Mode on

  ```bash
  npx playwright test --trace on
  ```

---

### Interactive Test Explorer (UI Mode)

```bash
npx playwright test --ui
```

This opens Playwright’s interactive mode for browsing, filtering, and debugging tests.

---

### View Test Report

Generate and open the last run’s HTML report:

```bash
npx playwright show-report
```

---

✅ With this setup, you can start authoring tests in `tests/` and customize your configuration in `playwright.config.ts`.
