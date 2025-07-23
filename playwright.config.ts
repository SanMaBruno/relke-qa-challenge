import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
    baseURL: 'https://demo.relbase.cl',
    ignoreHTTPSErrors: true,
    // Slow down to make tests more stable
    actionTimeout: 10000,
    navigationTimeout: 30000,
    // Take screenshots on failure
    screenshot: 'only-on-failure',
    // Record video on failure
    video: 'retain-on-failure',
    // Capture trace on failure
    trace: 'retain-on-failure',
  },
  testDir: './tests',
  timeout: 60000,
  // Retry tests on failure
  retries: 2,
  // Run tests in parallel
  workers: 1,
  // Better reporting
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['list']
  ],
  outputDir: 'test-results/',
});
