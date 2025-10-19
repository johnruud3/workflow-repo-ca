import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Loads environment variables from the .env file
dotenv.config();

export default defineConfig({
  testDir: 'tests',
  testMatch: ['**/*.spec.js'],
  webServer: {
    command: 'npx http-server -p 3000 .',
    port: 3000,
  },
  use: {
    baseURL: 'http://localhost:3000',
  },
});
