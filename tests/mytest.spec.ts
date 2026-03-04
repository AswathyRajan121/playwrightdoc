import { test, expect } from '@playwright/test';

test('verify page title', async ({ page }) => {

await page.goto("https://practice.expandtesting.com/")

let title:string = await page.title()
console.log("Page Title is: " + title);

await expect(page).toHaveTitle("Automation Testing Practice Website for QA and Developers | UI and API");
});

    