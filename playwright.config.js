import { defineConfig } from '@playwright/test';

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