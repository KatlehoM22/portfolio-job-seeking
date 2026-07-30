import { defineConfig } from "@playwright/test";

const externalBaseUrl = process.env.PLAYWRIGHT_BASE_URL;
const baseURL = externalBaseUrl ?? "http://localhost:3000";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL,
  },
  webServer: externalBaseUrl
    ? undefined
    : {
        command: "node ./node_modules/next/dist/bin/next dev --webpack",
        url: baseURL,
        reuseExistingServer: true,
        timeout: 120_000,
      },
});
